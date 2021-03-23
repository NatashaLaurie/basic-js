const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE = Math.log(2)/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
   if(!sampleActivity || typeof(sampleActivity) != 'string') return false;
  let num = parseFloat(sampleActivity);
  if (!num || isNaN(num) || num < 0 || num > MODERN_ACTIVITY) return false;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY/num)/RATE);
  return age;
};
