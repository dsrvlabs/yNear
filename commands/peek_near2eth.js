#!/usr/bin/env node

const BN = require('bn.js')
const fs = require('fs')
const { RobustWeb3 } = require('rainbow-bridge-lib/rainbow/robust')
const {
  normalizeEthKey
} = require('rainbow-bridge-lib/rainbow/robust')

if (process.argv.length < 6) {
  console.log(process.argv[1] + ' <near-account> <lock-tx-hash> <amount> <recipient-eth-account>')
  process.exit(-1)
}

const _amount = process.argv[4]
const _ethDestinationAddress = process.argv[5]

let config = JSON.parse(fs.readFileSync('config.json'))

const _ethProviderUrl = config.ethProviderUrl
const _ethMasterSk = config.ethMasterSk
const _ethClientAddress = config.ethClientAddress
const _ethTokenAddress = config.ethTokenAddress

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

async function execute() {

    let robustWeb3 = await connectEth(
      _ethProviderUrl,
      _ethMasterSk
    )
    let web3 = robustWeb3.web3

    let nonce = await web3.eth.getTransactionCount(web3.eth.defaultAccount)
    let tx = await web3.eth.accounts.signTransaction({
      'nonce': nonce + 1, // TODO: more robust against race conditions
      chainId: '4', // rinkeby
      to: _ethTokenAddress,
      data: web3.eth.abi.encodeFunctionCall({
        name: 'transfer',
        type: 'function',
        inputs: [{
            type: 'address', name: 'to'
          }, {
            type: 'uint256', name: 'value'
          }]
        //}, [_ethDestinationAddress, new BN(robustWeb3.web3.utils.fromWei(_amount, 'mwei'))]), // 24 -> 18
        }, [_ethDestinationAddress, _amount.substring(0, _amount.length - 6)]), // 24 -> 18
      value: '0',
      gas: '4000000',
      gasPrice: robustWeb3.web3.utils.toWei('1', 'gwei')
    }, _ethMasterSk)
    //console.log(tx)

    //console.log(tx.transactionHash)
    process.stdout.write(tx.transactionHash) // suppress newline
}

execute()

