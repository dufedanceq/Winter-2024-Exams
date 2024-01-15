// Generate random integer value in given range

randomNum = (minNum, maxNum) => {
  if (maxNum === undefined) {
    maxNum = minNum;
    minNum = 0;
  }
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }

module.exports = randomNum;
