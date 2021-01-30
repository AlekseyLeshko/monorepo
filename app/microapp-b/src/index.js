const microappName = 'microapp-b';

console.log(`microapp:${microappName}:start`);

const { calc } = require('calc');

const microappB = (num) => {
  return num + 1;
}

calc(4);

module.exports = {
  microappB,
}

console.log(`microapp:${microappName}:end`);
