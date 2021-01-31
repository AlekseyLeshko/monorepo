const microappName = 'microapp-a';

const logger = require('logger');
const { microappB } = require('microapp-b');

// eslint-disable-next-line no-console
console.log(`microapp:${microappName}:start`);

const microappA = (num) => {
  const result = num - 1;
  logger.log([num, 1, result]);
  return result;
};

microappA(3);
microappB(4);

module.exports = {
  microappA,
};

// eslint-disable-next-line no-console
console.log(`microapp:${microappName}:end`);
