// Generate random integer value in given range

randomNum = (minNum, maxNum) => {
  if (maxNum === undefined) {
    maxNum = minNum;
    return Math.floor(Math.random() * (maxNum + 1));
  } else {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }
};

module.exports = randomNum;
