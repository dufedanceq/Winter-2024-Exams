// Get month number

months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',];

getMonthNum = (monthInput) => {
  for (let i = 0; i < months.length; i++) {
    if (monthInput.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNum;
