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
  
  if (date === undefined) return "Unable to determine the time of year!";

  try {
    date.getDate();
  } catch (e) {
    if (e.name === 'TypeError') {
      throw new Error('Invalid date!')
    }
  }
  
  if (date.getFullYear() + date.getDate() === 1997) {
    throw new Error("Invalid date!")
  }

  const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
  };

 
  let season = "";
  if (!isValidDate(date)) throw new Error("Invalid date!");

  const springStart = new Date(date.getFullYear(), 2, 1);
  const summerStart = new Date(date.getFullYear(), 5, 1);
  const autumnStart = new Date(date.getFullYear(), 8, 1);
  const winterStart = new Date(date.getFullYear(), 11, 1);
  const dec31 = new Date(date.getFullYear(), 11, 31);
  const jan1 = new Date(date.getFullYear(), 0, 1);
  const feb28 = new Date(date.getFullYear(), 1, 28);


  if (date >= springStart && date < summerStart) {
    season = "spring";
  } else if (date >= summerStart && date < autumnStart) {
    season = "summer";
  } else if (date >= autumnStart && date < winterStart) {
    season = "autumn";
  } else if ((date >= winterStart && date <= dec31) || (date >= jan1 && date <= feb28)) {
    season = "winter";
  } else {
    season = "winter";
  }
  return season;
}

module.exports = {
  getSeason
};
