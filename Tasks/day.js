// Get day number

'use strict'

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (start) => {

  for (let i = 0; i < Days.length; i++) {
    if (start.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }

  return -1;
};

module.exports = parseDay;
