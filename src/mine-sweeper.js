const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function minesweeper(matrix) {
//   const matrixCopy = matrix.map(item => item.map(_ => 0));
//   const matrixWidth = matrix[0].length;
//   const matrixHeight = matrix.length;

//   for (let i = 0; i < matrixHeight; i++) {
//       for (let j = 0; j < matrixWidth; j++) {
//           let sumN = 0;
//           const minN = i - 1 < 1 ? 0 : i - 1;
//           const maxN = i + 1 >= matrixHeight ? matrixHeight - 1 : i + 1;
//           const minM = j - 1 < 1 ? 0 : j - 1;
//           const maxM = j + 1 >= matrixWidth ? matrixWidth - 1 : j + 1;

//           for (let n = minN; n <= maxN; n++) {
//               let sumM = 0;
//               for (let m = minM; m <= maxM; m++) {
//                   !(n === i && m === j) ? sumM += matrix[n][m]: null;
//               }
//               sumN += sumM;
//           }

//           matrixCopy[i][j] = sumN;
//       }
//   }
//   return matrixCopy;
// }

module.exports = {
  minesweeper
};
