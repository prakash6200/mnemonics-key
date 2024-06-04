const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const secretKey = "12345678901234567890123456789012"
// Define your custom secret key (32 bytes / 256 bits)
const secretKeyBuffer = Buffer.from(secretKey);

// Define your custom initialization vector (16 bytes / 128 bits)
const initVector = Buffer.from('1234567890123456'); 

function encrypt(message) {
    const cipher = crypto.createCipheriv(algorithm, secretKeyBuffer, initVector);
    let encryptedData = cipher.update(message, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

function decrypt(encryptedMessage) {
    const decipher = crypto.createDecipheriv(algorithm, secretKeyBuffer, initVector);
    let decryptedData = decipher.update(encryptedMessage, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
}

const message = 'My message is not send';
const encryptedMessage = encrypt(message);
console.log('Encrypted message:', encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log('Decrypted message:', decryptedMessage);