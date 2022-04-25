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

const message = "the woods are dark and deep.";

// hash the message

// create an empty hash
var messageHash = sodium.sodium_malloc(sodium.crypto_hash_sha256_BYTES);

// convert the message into a buffer
var msgBuffer = Buffer.from(message);

// hash the message into the empty hash
sodium.crypto_hash_sha256(messageHash, msgBuffer);

console.log(`hash of "${message}" is: 0x${messageHash.toString('hex')}`);

// sign with alice private key

// generate a signature (with the private key)
const aliceSignature = sodium.sodium_malloc(sodium.crypto_sign_BYTES);
console.log(`signature is ${aliceSignature.length}-bytes long`);

sodium.crypto_sign_detached(aliceSignature, messageHash, alicePrivateSigningKey);

console.log(`alice signature is: 0x${aliceSignature.toString('hex')}`);

// verify with alice pub key

// first create a copy of the verify message and hash it 
// we'll do this to demo a signature fail
// var verifyMessage = "the woods are dark and deep.";
// var verifyMessageHash = sodium.sodium_malloc(sodium.crypto_hash_sha256_BYTES);
// sodium.crypto_hash_sha256(verifyMessageHash, Buffer.from(verifyMessage));


// negative testing with another signingkey
// const alicPublicSigningKey = sodium.sodium_malloc(pubkeybytes);
// const alicPrivateSigningKey = sodium.sodium_malloc(privkeybytes);

// sodium.sodium_memzero(alicPublicSigningKey);
// sodium.sodium_memzero(alicPrivateSigningKey);

// sodium.crypto_sign_keypair(alicPublicSigningKey, alicPrivateSigningKey);


// check (verify) the signature
var bool = sodium.crypto_sign_verify_detached(aliceSignature, messageHash, alicePublicSigningKey);

console.log(`signature verification status: ${bool}`);
