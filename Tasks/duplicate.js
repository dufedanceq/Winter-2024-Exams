// Return an array without duplicates

const duplicate = (value, numberOfRepeats) => {
  if (numberOfRepeats <= 0) return [];
    const result = [];
    for (let i = 0; i < numberOfRepeats; i++) {
      result[i] = value;
    }
    return result;
};

module.exports = duplicate;
