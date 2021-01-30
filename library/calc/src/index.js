console.log('library:calc:start');

const logger = require('logger');
const { add } = require('ramda');

const calc = (num) => {
  return add(num, 1);
}

module.exports = {
  calc,
}

console.log('library:calc:end');
