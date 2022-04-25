var sodium = require("sodium-native");


// get a secret
// encrypt the message with the secret
// decrypt the message with the secret
// hopefully the decrypted message is the same as the original message

// create a message
const message = "the woods are dark and deep.";

var cipherText = sodium.sodium_malloc(message.length);
console.log(`encrypted message will be ${message.length}-bytes long`);

// we need a nonce
var nonce = 0;
var nonceBuffer = sodium.sodium_malloc(sodium.crypto_stream_chacha20_NONCEBYTES);
nonceBuffer.writeInt32BE(nonce, 0);
console.log(`nonce buffer is ${nonceBuffer.length}-bytes long`);

// we need an encryption key
const encryptionKey = Buffer.from('899ee81f1b85d510a3941b73dcffbea6401c3195f992bb61369e3bbb89c5d17b', 'hex');

// encrypt the message
sodium.crypto_stream_chacha20_xor(cipherText, Buffer.from(message), nonceBuffer, encryptionKey);
console.log(`cipher text is: ${cipherText.toString('hex')}`);

// decrypt the message
var decryptedMessage = sodium.sodium_malloc(cipherText.length);
sodium.crypto_stream_chacha20_xor(decryptedMessage, cipherText, nonceBuffer, encryptionKey);

console.log(`decrypted message is: ${decryptedMessage}`);

// if we wanted to use Perfect Forward Secrecy
// which is better than reusing the same key again and again

// get an encryption key
// hash it with 0
// send a message (using hash(encryption,0) as the key)
// hash the new key with 1
// send a message (using hash(new encryption key, 1) as the key)
// called the double-ratchet algorithm







