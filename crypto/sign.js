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

const alicePublicSigningKey = sodium.sodium_malloc(pubkeybytes);
const alicePrivateSigningKey = sodium.sodium_malloc(privkeybytes);

sodium.sodium_memzero(alicePublicSigningKey);
sodium.sodium_memzero(alicePrivateSigningKey);

sodium.crypto_sign_keypair(alicePublicSigningKey, alicePrivateSigningKey);

console.log(`alice public key: ${alicePublicSigningKey.toString('hex')}`);

// create a message

const message = "the woods are dark and deep";

// hash the message


// sign with alice private key

// verify with alice pub key
