// in our metamask, we have a number of ethereum addresses
// this code will show you how to create those addresses

// using BIP39, BIP44





// load the dependencies
const Wallet = require("ethereumjs-wallet").default;
const keccak256 = require("keccak256");

const getWalletDetails = async() => {
    console.log("async function started.");
    
    // to generate an ETH address
    // first: an secp256k1 keypair
    // then we take the public key
    // keccak256 hash it
    // drop the first 12 bytes

    const wallet = Wallet.generate();
    const pubKey  = wallet.getPublicKey();
    const hashedPubKey = keccak256(pubKey).toString('hex');
    console.log(`hashed public key is: 0x${hashedPubKey}`);

    const ethAddress = hashedPubKey.substring(24);
    console.log(`eth address is: 0x${ethAddress}`);
    const privKey = wallet.getPrivateKey();


}

getWalletDetails();

console.log("this is the wallet creation file");