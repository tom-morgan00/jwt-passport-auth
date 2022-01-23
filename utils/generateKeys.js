const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const genKeyPair = () => {
  const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096, // bits (512 bytes) standard for RSA keys
    publicKeyEncoding: {
      type: 'pkcs1', // "Public Key Cryptographhy Standards 1"
      format: 'pem', // Most common formatting
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });

  // create public key file
  fs.writeFileSync(
    path.join(__dirname, '../generatedKeys/id_rsa_pub.pem'),
    keyPair.publicKey
  );

  // create private key file
  fs.writeFileSync(
    path.join(__dirname, '../generatedKeys/id_rsa_priv.pem'),
    keyPair.privateKey
  );
};

// RUN THIS TO GENERATE KEYS - MUST first create folder "generatedKeys" in root directory
// genKeyPair();
