# yNear
Yield Near for 🌈 Hack The Rainbow

## Summary
![yNear explain img](https://github.com/dsrvlabs/yNear/raw/master/unknown-6.png)
NEAR Protocol uses a Proof-of-Stake consensus to secure its blockchain network. All validators must stake a certain amount of its native token NEAR to participate in validation.

In the NEAR Protocol, with its powerful smart contract features, it is possible to tokenize the staked assets and transfer it to Ethereum through the rainbow bridge.

This versatility offers many opportunities for token holders as they can maximize the usability of NEAR by utilizing the benefits of the Ethereum ecosystem while still protecting the security of its network.
 
 We suggest cross-chain staking derivatives.

You can receive yNEAR tokens by staking NEAR tokens to certain validators and 
the amount of yNEAR is adjusted to accumulated validator rewards.

By transferring yNEAR to Ethereum, holders can explore diverse opportunities from defi projects.

A small commission of validator rewards will be collected into the treasury, in which all yNEAR token holders can participate in the governance and project initiatives.

## Demo Video

[![Watch the video](https://img.youtube.com/vi/RA5SZdo2uSQ/hqdefault.jpg)](https://youtu.be/RA5SZdo2uSQ)

## Code

* Contract(Rust): [github](https://github.com/dsrvlabs/BondToken)
* Front-end: [github](https://github.com/dsrvlabs/BondFront)
* Back-end: [github](https://github.com/dsrvlabs/yNear)

## TODO
- [ ] implement Rebase logic for Staking Reward.
  - [ ] rust contract
  - [ ] solidity contract
- [ ] yNear Ecosystem
  - [ ] Governance Module
  - [ ] Treasury
  - [ ] more validator
- [x] Interface
  - [x] design
  - [x] implementation
- [ ] Contract
  - [x] Delegation for Token
  - [ ] Gas Price Calculate
  - [ ] Testcase
