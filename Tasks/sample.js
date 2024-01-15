// Get one random element from an array

const getRandomElement = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = getRandomElement;
