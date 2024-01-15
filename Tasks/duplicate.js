// Return an array without duplicates

duplicate = (value, numberOfRepeats) => {
  if (numberOfRepeats <= 0) return [];
    result = [];
    for (let i = 0; i < numberOfRepeats; i++) {
      result[i] = value;
    }
    return result;
};

module.exports = duplicate;
