const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let ntoString = n.toString();
  let res = [];

  for (let i = 0; i < ntoString.length; i++) {
    res.push(ntoString.slice(0, i) + ntoString.slice(i + 1))
  }

  return Math.max.apply(0, res);
}

module.exports = {
  deleteDigit
};
