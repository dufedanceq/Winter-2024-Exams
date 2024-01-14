// Split an array into two parts

'use strict'

const splitArray = (index, array) => {
  
  const begin = array.slice(0, index);
  const cease = array.slice(index, array.length);
  
  return [begin, cease];
};

module.exports = splitArray;
