// Get day number

let Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (strt) => {
  let i;
  for (i = 0; i < Days.length; i++) {
    if (strt.startsWith(Days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
