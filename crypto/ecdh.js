// for ECDH
// Alice has a private key and a public key (elliptic curve)
// Bob has a private key and a public key

// Alice gives Bob her public key
// Bob gives Alice his public key

// Somehow, magically, Alice and Bob will then 
// agree on the same secret,
// which they can then use to encrypt communications

// this is a KEY EXCHANGE

// how does this work?

// alice's public key = G * PrivK(A)
// bob's public key = G * PrivK(B)

// alice's ecdh SECRET = PrivK(A) * G * PrivK(B)
// bob's ecdh SECRET = PrivK(B) * G * PrivK(A)

// PrivK(A) * G * PrivK(B) = PrivK(A) * G * PrivK(B)

var sodium = require("sodium-native");

