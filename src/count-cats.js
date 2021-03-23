const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backYard) {
  let counter = 0;
  for (let i = 0; i< backYard.length; i++) {
    for (let j = 0; j< backYard[i].length; j++) {
      if (backYard[i][j] == '^^') counter++;
    }
  }
  return counter;
};
