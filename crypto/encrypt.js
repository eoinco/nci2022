var sodium = require("sodium-native");

// create a message
// get a secret
// encrypt the message with the secret
// decrypt the message with the secret
// hopefully the decrypted message is the same as the original message

const message = "the woods are dark and deep.";

var messageText = sodium.sodium_malloc(message.length);
var cipherText = sodium.sodium_malloc(message.length);
console.log(`encrypted message is ${message.length}-bytes long`);

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
sodium.crypto_stream_chacha20_xor(decryptedMessage, cipherText, bobNonceBuffer, encryptionKey);

console.log(`decrypted message is: ${decryptedMessage}`);




