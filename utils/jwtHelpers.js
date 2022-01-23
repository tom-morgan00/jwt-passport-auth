const jwt = require('jsonwebtoken');
// common node js modules
const fs = require('fs');
const path = require('path');

// private key from "generatedKeys/id_rsa_priv.pem"
const pathToKey = path.join(__dirname, '../generatedKeys/id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf-8');

const issueJWT = (user) => {
  // user id
  const id = user.id;

  // jwt header
  const headerOptions = {
    algorithm: 'RS256',
    expiresIn: '1d',
  };

  // jwt payload - user id & current date
  const payload = {
    sub: id,
    iat: Date.now(),
  };

  // generate signedToken with payload + private key + header
  const signedToken = jwt.sign(payload, PRIV_KEY, headerOptions);

  // return jwt
  return {
    token: `Bearer ${signedToken}`,
    expires: headerOptions.expiresIn,
  };
};

module.exports = issueJWT;
