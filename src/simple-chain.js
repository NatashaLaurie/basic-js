const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof(value) !== 'string') value = `${value}`;
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position !== (position | 0) || !(position - 1 in this.chain)) {
      this.chain.length = 0;
      throw new Error('THROWN');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    if (this.chain.length) {
      str = `( ${this.chain.join(' )~~( ')} )`;
      this.chain.length = 0;
    }
    return str;
  },
};

module.exports = chainMaker;
