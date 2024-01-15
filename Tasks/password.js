// Generate random password

let generatePassword = (alphabet, length) => {
  const maxIndex = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    key = key + alphabet[Index = Math.floor(Math.random() * maxIndex)];
  }
  return key;
};

module.exports = generatePassword;
