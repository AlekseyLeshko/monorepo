const libraryName = 'microapp-a';

console.log(`library:${libraryName}:start`);

const microappA = (num) => {
  return num - 1;
}

module.exports = {
  microappA,
}

console.log(`library:${libraryName}:end`);
