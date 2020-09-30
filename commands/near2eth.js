#!/usr/bin/env node
const nearlib = require('near-api-js')
const BN = require('bn.js')
const fs = require('fs')
const bs58 = require('bs58')
const { toBuffer } = require('eth-util-lite')
const { sleep, RobustWeb3 } = require('rainbow-bridge-lib/rainbow/robust')
const {
  normalizeEthKey,
  backoff,
} = require('rainbow-bridge-lib/rainbow/robust')

if (process.argv.length < 6) {
  console.log(process.argv[1] + ' <near-account> <lock-tx-hash> <amount> <recipient-eth-account>')
  process.exit(-1)
}

const _amount = process.argv[4]
const _ethDestinationAddress = process.argv[5]

let config = JSON.parse(fs.readFileSync('config.json'))

const _nearNodeUrl = config.nearNodeUrl
//const _nearSenderAccountId = config.nearSenderAccountId
const _nearSenderAccountId = process.argv[2]
const _nearSenderSk = config.nearSenderSk
const _nearTokenAccountId = config.nearTokenAccountId
const _nearLockAccountId = config.nearLockAccountId
const _ethProviderUrl = config.ethProviderUrl
const _ethMasterSk = config.ethMasterSk
const _ethClientAddress = config.ethClientAddress
const _ethTokenAddress = config.ethTokenAddress

/* customized nearlib.Contract */

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const bn_js_1 = __importDefault(require("bn.js"));
const providers_1 = require("near-api-js/lib/providers");
const errors_1 = require("near-api-js/lib/utils/errors");
function nameFunction(name, body) {
    return {
        [name](...args) {
            return body(...args);
        }
    }[name];
}
function validateBNLike(argMap) {
    const bnLike = 'number, decimal string or BN';
    for (const argName of Object.keys(argMap)) {
        const argValue = argMap[argName];
        if (argValue && !bn_js_1.default.isBN(argValue) && isNaN(argValue)) {
            throw new errors_1.ArgumentTypeError(argName, bnLike, argValue);
        }
    }
}

class Contract2 {
    constructor(account, contractId, options) {
        this.account = account;
        this.contractId = contractId;
        const { viewMethods = [], changeMethods = [] } = options;
        viewMethods.forEach((methodName) => {
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (args = {}, ...ignored) => {
                    if (ignored.length || Object.prototype.toString.call(args) !== '[object Object]') {
                        throw new errors_1.PositionalArgsError();
                    }
                    return this.account.viewFunction(this.contractId, methodName, args);
                })
            });
        });
        changeMethods.forEach((methodName) => {
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (args = {}, gas, amount, ...ignored) => {
                    if (ignored.length || Object.prototype.toString.call(args) !== '[object Object]') {
                        throw new errors_1.PositionalArgsError();
                    }
                    validateBNLike({ gas, amount });
                    const rawResult = await this.account.functionCall(this.contractId, methodName, args, gas, amount);
                    return rawResult;
                    //return providers_1.getTransactionLastResult(rawResult);
                })
            });
        });
    }
}

async function connectNear(accountId, accountSk) {
    const keyStore = new nearlib.keyStores.InMemoryKeyStore()
    const nearNetworkId = accountId.substring(accountId.lastIndexOf('.') + 1)
    await keyStore.setKey(
      nearNetworkId,
      accountId,
      nearlib.KeyPair.fromString(accountSk)
    )
    const near = await nearlib.connect({
      nodeUrl: _nearNodeUrl,
      networkId: nearNetworkId,
      masterAccount: accountId,
      deps: { keyStore: keyStore },
    })
    return near
}

async function lockOnNear(
  near,
  nearSenderAccountId,
  nearTokenAccountId,
  nearLockAccountId,
  amount
) {
    // regard transfer as lock temporarily
    let account = new nearlib.Account(near.connection, nearSenderAccountId)
    let nearTokenContract = new Contract2(
      account,
      nearTokenAccountId,
      {
        changeMethods: ['transfer'], // new_owner_id,amount
        viewMethods: ['get_balance', 'get_allowance'], // owner_id / owner_id,escrow_account_id
      }
    )

    let result = await nearTokenContract.transfer({
        'new_owner_id': nearLockAccountId,
        'amount': amount
      },
      new BN('300000000000000'),
      new BN('200000000'))
    return result
}

async function waitNearReceipt(
  near,
  txResult
) {
    let txReceiptId = txResult.transaction_outcome.outcome.status.SuccessReceiptId
    let txReceiptBlockHash = txResult.receipts_outcome.find(
      (el) => el.id == txReceiptId
    ).block_hash
    const outcomeBlock = await backoff(10, () =>
      near.connection.provider.block({
        blockId: txReceiptBlockHash,
      })
    )
    return outcomeBlock
}

async function connectEth(
  ethProviderUrl,
  ethMasterSk
) {
    let robustWeb3 = new RobustWeb3(ethProviderUrl)
    let web3 = robustWeb3.web3
    let ethMasterAccount = web3.eth.accounts.privateKeyToAccount(
      normalizeEthKey(ethMasterSk)
    )
    web3.eth.accounts.wallet.add(ethMasterAccount)
    web3.eth.defaultAccount = ethMasterAccount.address
    return robustWeb3
}

async function waitNearBlockOnEth(
  robustWeb3,
  nearBlock,
  ethClientAddress
) {
    let web3 = robustWeb3.web3
    const clientContract = new web3.eth.Contract(
      // @ts-ignore
      JSON.parse(
        fs.readFileSync('NearBridge.full.abi')
      ),
      ethClientAddress,
      {
        from: web3.eth.defaultAccount,
        handleRevert: true,
      }
    )

    try {
      const nearBlockHeight = new BN(nearBlock.header.height)
      let clientBlock
      let clientBlockHeight
      let clientBlockValidAfter
      let clientBlockHashB58
      let clientBlockHashHex
      while (true) {
        clientBlock = await clientContract.methods.head().call()
        clientBlockHeight = new BN(clientBlock.height)
        clientBlockValidAfter = new BN(clientBlock.validAfter)
        clientBlockHashHex = await clientContract.methods
          .blockHashes(clientBlockHeight)
          .call()
        clientBlockHashB58 = bs58.encode(toBuffer(clientBlockHashHex))
        console.log(
          `Current light client head is: hash=${clientBlockHashB58}, height=${clientBlockHeight.toString()}`
        )

        const chainBlock = await robustWeb3.getBlock('latest')
        const chainBlockTimestamp = new BN(chainBlock.timestamp)
        if (clientBlockHeight.gt(nearBlockHeight)) {
          console.log(`Near2EthClient block is at ${clientBlockHeight.toString()} which is further than the needed block ${nearBlockHeight.toString()}`)
          //break
          return clientBlockHashB58
        } else if (
          chainBlockTimestamp.lt(clientBlockValidAfter) &&
          clientBlockHeight.eq(nearBlockHeight)
        ) {
          const sleepSec = clientBlockValidAfter
            .sub(chainBlockTimestamp)
            .toNumber()
          console.log(
            `Block ${clientBlockHeight.toString()} is not valid yet. Sleeping ${sleepSec} seconds.`
          )
          await sleep(sleepSec * 1000)
        } else {
          const sleepSec = 10
          console.log(
            `Block ${nearBlockHeight.toString()} is not available on the light client yet. Current ` +
              `height of light client is ${clientBlockHeight.toString()}. Sleeping ${sleepSec} seconds.`
          )
          await sleep(sleepSec * 1000)
        }
      }
    } catch (txRevertMessage) {
      console.log('Failed to wait for block occur in near on eth contract')
      console.log(txRevertMessage.toString())
      process.exit(-1)
      //TransferEthERC20FromNear.showRetryAndExit()
    }
}

async function getNearProof(
  near,
  txReceiptId,
  nearSenderAccountId,
  clientBlockHashB58
) {
    let proofRes = await near.connection.provider.sendJsonRpc(
      'light_client_proof',
      {
        type: 'receipt',
        receipt_id: txReceiptId,
        receiver_id: nearSenderAccountId,
        light_client_head: clientBlockHashB58,
      }
    )
    return proofRes
}

async function mintOnEth(
  robustWeb3,
  ethTokenAddress,
  ethDestinationAddress,
  amount
) {
    // TODO: store and accumulate proofs
    try {
      let web3 = robustWeb3.web3
      const tokenContract = new web3.eth.Contract(
        // @ts-ignore
        JSON.parse(
          fs.readFileSync('StandardToken.full.abi')
        ),
        ethTokenAddress,
        {
          from: web3.eth.defaultAccount,
          gas: 4000000,
          gasPrice: web3.utils.toWei('1', 'gwei'),
          handleRevert: true,
        }
      )

      //const amount_wei = web3.utils.fromWei(amount, 'mwei') // 24 -> 18
      const amount_wei = amount.substring(0, amount.length - 6) // 24 -> 18
      let result1 = await tokenContract.methods.mint(amount_wei).send()
      console.log('mint result', result1)
      let result2 = await tokenContract.methods.transfer(ethDestinationAddress, amount_wei).send()
      console.log('transfer result', result2)
    } catch (txRevertMessage) {
      console.log(txRevertMessage)
    }
}

// `execute` takes a role after lock transaction broadcast.
async function execute(txHash) {
    console.log('execute', txHash)

    let near = await connectNear(_nearSenderAccountId, _nearSenderSk)
    console.log('near', near)

    /*
    let txResult = await lockOnNear(
      near,
      _nearSenderAccountId,
      _nearTokenAccountId,
      _nearLockAccountId,
      _amount
    )
    console.log('txResult', txResult)
    */

    let txResult = await near.connection.provider.txStatus(nearlib.utils.serialize.base_decode(txHash), _nearSenderAccountId)

    let nearBlock = await waitNearReceipt(
      near,
      txResult
    )
    console.log('nearBlock', nearBlock)

    let robustWeb3 = await connectEth(
      _ethProviderUrl,
      _ethMasterSk
    )
    console.log('robustWeb3 ...')

    let clientBlockHashB58 = await waitNearBlockOnEth(
      robustWeb3,
      nearBlock,
      _ethClientAddress,
    )
    console.log('clientBlockHashB58', clientBlockHashB58)

    let proofRes = await getNearProof(
      near,
      txResult.transaction_outcome.outcome.status.SuccessReceiptId,
      _nearSenderAccountId,
      clientBlockHashB58
    )
    console.log('proofRes', proofRes)

    await mintOnEth(
      robustWeb3,
      _ethTokenAddress,
      _ethDestinationAddress,
      _amount
    )
    console.log('mintOnEth', mintOnEth)

    process.exit(0)
}

//execute()

// workaround for fetching transfer/lock transaction hash
//   We had troubles when finding a txhash via a wallet.
var autobahn = require('autobahn')
var wamp_connection = new autobahn.Connection({
  url: 'wss://near-explorer-wamp.onrender.com/ws',
  realm: 'near-explorer'
})
wamp_connection.onopen = function (session) {
    session.call('com.nearprotocol.testnet.explorer.select', [
      'SELECT hash, signer_id as signerId, receiver_id as receiverId, \n              block_hash as blockHash, block_timestamp as blockTimestamp, transaction_index as transactionIndex\n          FROM transactions\n          WHERE signer_id = :signerId OR receiver_id = :receiverId\n          ORDER BY block_timestamp DESC, transaction_index DESC\n          LIMIT :limit',
      { 'signerId": 'dsrvlabs.testnet', 'receiverId': 'dsrvlabs.testnet', 'limit': 10 }
    ]).then(function (res) {
        execute(res[0].hash) // first (most recent) transaction hash
    })
}
wamp_connection.open()

