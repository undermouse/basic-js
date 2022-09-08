const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function createDreamTeam(members) {
  let dreamTeam = [];
  if (members) {
    for (let name = 0; name < members.length; name++) {
      if (typeof members[name] === "string") {
        let tempName = members[name].split(' ').join('');
        dreamTeam.push(tempName[0].toUpperCase());
      } else continue;
    }
  }
  return dreamTeam.sort().join("");
}


module.exports = {
  createDreamTeam
};
