const microappName = 'microapp-b';

// eslint-disable-next-line no-console
console.log(`microapp:${microappName}:start`);

const { calc } = require('calc');
const { add } = require('ramda');
const logger = require('logger');

const microappB = (num: number) => num + 1;

logger.log('use ramda');
logger.log(calc(add(3, 1)));

module.exports = {
  microappB,
};

// eslint-disable-next-line no-console
console.log(`microapp:${microappName}:end`);
