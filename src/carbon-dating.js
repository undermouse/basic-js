const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */


function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") return false;
  if (sampleActivity === undefined) return false;
  if (sampleActivity === null) return false;
  if (!sampleActivity) return false;
  if (isNaN(sampleActivity)) return false;
  if (isNaN(parseFloat(sampleActivity))) return false;
  if (sampleActivity > 5000) return false;
  if (sampleActivity == 0) return false;
  
  
  let k = 0.693 / HALF_LIFE_PERIOD;
  

  if (sampleActivity > 0) {
    let tmp = Math.log(MODERN_ACTIVITY / sampleActivity);
    if (Math.ceil(tmp / k) > 0) {
      return Math.ceil(tmp / k);
    } else return false;
  } else return false;
  

}

module.exports = {
  dateSample
};
