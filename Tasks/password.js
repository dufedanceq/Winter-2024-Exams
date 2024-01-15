// Generate random password

const generatePassword = (alphabet, length) => {
  const maxIndex = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    key = key + alphabet[Math.floor(Math.random() * maxIndex)];
  }
  return key;
};

module.exports = generatePassword;
