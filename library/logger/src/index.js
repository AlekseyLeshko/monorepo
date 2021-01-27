const libraryName = 'logger';

console.log(`library:${libraryName}:start`);

const log = (...args) => {
  const str = JSON.stringify(args);
  console.log(`${libraryName}: ${str}`);
}

log(['the', 'test', 'call']);

module.exports = {
  log,
}

console.log(`library:${libraryName}:end`);
