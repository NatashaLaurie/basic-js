const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof(members) != 'object' || members === null || !members.length) return false;
    let letters = '';
    for (let i = 0; i < members.length; ++i) {
      if (typeof(members[i]) != 'string') continue;
      letters+= members[i].trim().toUpperCase().substr(0,1);
    }
    let arr = letters.split('');
    return arr.sort().join('');
};
