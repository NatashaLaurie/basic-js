const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let string;
  if (typeof str != 'string') {
    string = `${str}`;
  } else string =  str;
  const result = [];
  let i = 0;
  while (i < repeatTimes) {
    let subStr = string;
    if (addition !== "") {
      let addOptions = {
        repeatTimes: additionRepeatTimes,
        separator: additionSeparator,
      };
      subStr += repeater(addition, addOptions);
    }
    result.push(subStr);
    i++;
  };

  return result.join(separator);
};
  