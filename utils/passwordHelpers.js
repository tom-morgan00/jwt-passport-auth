const bcrypt = require('bcrypt');

// returns hashed password to store in db
const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

// returns true if password is correct
const validPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  hashPassword,
  validPassword,
};
