const microappName = 'microapp-b';

console.log(`microapp:${microappName}:start`);

const microappB = (num) => {
  return num + 1;
}

module.exports = {
  microappB,
}

console.log(`microapp:${microappName}:end`);
