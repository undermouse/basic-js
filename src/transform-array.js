const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resArr = [];
  let tempArr = [];
  let controlSeq = "";

  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";
  let disNext = "--discard-next";
  let disPrev = "--discard-prev";

  tempArr = [...arr];

  arr.forEach((el) => {
    let next = Number(arr.indexOf(el) + 1);
    let prev = Number(arr.indexOf(el) - 1);
    let curr = Number(arr.indexOf(el));

    if (typeof el === "string") {
      controlSeq = el;
      if (controlSeq === doubleNext) {
        if (tempArr[next]) {
         tempArr[curr] = tempArr[next]; 
        } else {
          tempArr[curr] = 'del';
        }
      } else if (controlSeq === doublePrev) {
          if (tempArr[prev]) {
           tempArr[curr] = tempArr[next]; 
          } else {
            tempArr[prev] = 'del';
          }
        tempArr[curr] = tempArr[prev];

      } else if (controlSeq === disNext && tempArr[next] !== -1) {
        tempArr[curr] = "del";
        tempArr[next] = "del";
      } else if (controlSeq === disPrev && tempArr[prev] !== -1) {
        tempArr[prev] = "del";
        tempArr[curr] = "del";
      }
    }
  });
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] !== "del") {
      resArr.push(tempArr[i]);
    }
  }
  return resArr;
}

module.exports = {
  transform
};
