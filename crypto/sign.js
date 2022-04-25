// in here, we are going to sign and verify 
// using the x25519 elliptic curve algo

// SIGN with the private key
// VERIFY with the public key

// we usually sign a HASH of a message
// not the message

// use C25519 to sign/verify

// create an alice key pair
var sodium = require('sodium-native');

const pubkeybytes = sodium.crypto_sign_PUBLICKEYBYTES;
const privkeybytes = sodium.crypto_sign_SECRETKEYBYTES;


console.log(`pub key bytes: ${pubkeybytes}`);
console.log(`secret key bytes: ${privkeybytes}`);

// create a message

// hash the message

// sign with alice private key

// verify with alice pub key
