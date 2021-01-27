const libraryName = 'microapp-b';

console.log(`library:${libraryName}:start`);

const microappB = (num) => {
  return num + 1;
}

module.exports = {
  microappB,
}

console.log(`library:${libraryName}:end`);
