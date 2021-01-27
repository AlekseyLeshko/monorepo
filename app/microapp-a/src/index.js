const libraryName = 'microapp-a';

const logger = require('logger');
const { microappB } = require('microapp-b');

console.log(`library:${libraryName}:start`);

const microappA = (num) => {
  const result = num - 1;
  logger.log([num, 1, result]);
  return result;
}

microappA(3);

module.exports = {
  microappA,
}

console.log(`library:${libraryName}:end`);
