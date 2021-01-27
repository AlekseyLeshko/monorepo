const appame = 'app-a';

const logger = require('logger');
const { calc } = require('calc');
const { microappA } = require('microapp-a');
const { microappB } = require('microapp-b');

const num = 3;
const x = calc(num);
const y = microappA(x);
const z = microappB(y);

logger.log([num, x, y, z]);

console.log(`app:${appame}:start`);
console.log(`app:${appame}:end`);
