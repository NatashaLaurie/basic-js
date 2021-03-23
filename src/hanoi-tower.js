const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns : 0,
    seconds: 0 
  };
  const turnsNumber = Math.pow(2, disksNumber)-1;
  const sec = Math.floor(turnsNumber*3600/turnsSpeed);
  obj.turns = turnsNumber;
  obj.seconds = sec;
  return obj;
};
