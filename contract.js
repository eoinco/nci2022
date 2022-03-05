console.log("this is the contract.js file");

// this file will enable interaction with our smart contract
// we're going to read values from it
// and we're going to create transactions to write to it

// we want the following details
//  - an infura token
//  - a contract address
//  - an owner address
//  - a private key for the owner address (because we're going to sign txs)

// we want to access our deployed smart contract
// and pull back the name, symbol, and the owner balance 
// all these are read-only methods and so shouldn't involve
// creating a transaction

const Web3 = require("web3");

require('dotenv').config();

infuraToken = process.env.INFURA_TOKEN;
contractAddress = process.env.CONTRACT_ADDRESS;
ownerAddress = process.env.OWNER_ADDRESS;

console.log(`infura token loaded: ${infuraToken}`);




