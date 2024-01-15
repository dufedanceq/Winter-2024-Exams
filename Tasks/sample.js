// Get one random element from an array

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = getRandomElement;
