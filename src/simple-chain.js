const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const errMsg = "You can't remove incorrect link!";
 function isInt(value) {
   return (
     !isNaN(value) &&
     parseInt(Number(value)) == value &&
     !isNaN(parseInt(value, 10))
   );
 }
 String.prototype.addLink = function () {
   return this + "+";
 };
 
 let resArr = [];
 let tmpArr = [];
 let resString = "";
 
 const chainMaker = {
   getLength() {
     return resArr.length;
   },
 
   addLink(value) {
     if (!value) {
       resArr.push(` ( ) `);
       return this;
     } else {
       resArr.push(` (${value}) `);
       return this;
     }
   },
   removeLink(position) {
     if (!isInt(position) || isNaN(position) || !position) {
       throw new Error(errMsg);
     }
     if (position <0 || position > chainMaker.getLength()) {
      throw new Error(errMsg);
     }
     tmpArr = [...resArr];
     tmpArr[position] = "del";
     resArr = [];
     tmpArr.forEach((elDel) => {
       if (elDel !== "del") {
         resArr.push(elDel);
       }
     });
   },
 
   reverseChain() {
     resArr.reverse();
   },
 
   finishChain() {
     resString = resArr.join("~~");
     return resString;
   }
 };

module.exports = {
  chainMaker
};
