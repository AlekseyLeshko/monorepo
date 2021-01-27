console.log('library:calc:start');

const logger = require('logger');

const calc = (num) => {
  return num + 1;
}

module.exports = {
  calc,
}

console.log('library:calc:end');
