const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {

  console.log(date)

  const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d.valueOf()); //TODO: dont understand the tricky shit 
  }

  let season = '';
  if (date === undefined) return "Unable to determine the time of year!";
  if (!isValidDate(date)) throw new Error("Invalid date!");
  const springStart = new Date(date.getFullYear(), 2, 1);
  const summerStart = new Date(date.getFullYear(), 5, 1);
  const autumnStart = new Date(date.getFullYear(), 8, 1);
  const winterStart = new Date(date.getFullYear(), 11, 1);

  if (date >= springStart && date < summerStart) {
    season = 'spring';
  } else if (date >= summerStart && date < autumnStart) {
    season = 'summer';
  } else if (date >= autumnStart && date < winterStart) {
    season = 'autumn';
  } else if (date >= winterStart && date < springStart) {
    season = 'winter';
  } else {
    return 'winter';
  }
  return season;
}

module.exports = {
  getSeason
};
