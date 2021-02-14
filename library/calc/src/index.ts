const libraryName = 'calc';

// eslint-disable-next-line no-console
console.log(`library:${libraryName}:start`);

const logger = require('logger');
const { add } = require('ramda');

const calc = (num: number) => add(num, 1);

logger.log(add(calc(3)));

module.exports = {
  calc,
};

// eslint-disable-next-line no-console
console.log(`library:${libraryName}:end`);
