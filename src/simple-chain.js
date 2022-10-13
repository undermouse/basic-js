const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const errMsg = "You can't remove incorrect link!";
//  function isInt(value) {
//    return (
//      !isNaN(value) &&
//      parseInt(Number(value)) == value &&
//      !isNaN(parseInt(value, 10))
//    );
//  }

const chainMaker = {

  resArr: [],

  getLength() {
    return this.resArr.length;
  },

  addLink(value = '') {
    this.resArr.push(value);
    return this;
  },


  removeLink(position) {
    if (typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.resArr.length
    ) {
      this.resArr.length = 0;
      throw new Error(errMsg);
    } else {
      this.resArr.splice(position - 1, 1)
    }
    return this;
  },

  reverseChain() {
    //resArr.reverse();
    this.resArr = this.resArr.reverse();
    return this;
  },

  finishChain() {
    //  resString = resArr.join("~~");
    //  return resString;

    const result = this.resArr.map(ch => `( ${ch} )`)
      .join('~~');
    this.resArr.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
