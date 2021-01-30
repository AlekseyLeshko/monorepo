const microappName = 'microapp-b';

console.log(`microapp:${microappName}:start`);

const { calc } = require('calc');
const { add } = require('ramda');
const logger = require('logger');

const microappB = (num) => {
  return num + 1;
}

logger.log('use ramda');
logger.log(calc(add(3, 1)));

module.exports = {
  microappB,
}

console.log(`microapp:${microappName}:end`);
