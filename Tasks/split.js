// Split an array into two parts

'use strict'

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const cease = array.slice(index, array.length);
  return [begin, cease];
};

module.exports = split_Array;
