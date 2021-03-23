const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr instanceof Array) {
      let dep = 0;
      for (let i = 0; i < arr.length; i++) {
        let cur = this.calculateDepth(arr[i]);
        if (dep < cur) {
          dep = cur;
        }
      }
      return dep + 1;
    } else return 0;
  }
}