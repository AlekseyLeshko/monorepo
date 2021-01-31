const libraryName = 'logger';

// eslint-disable-next-line no-console
console.log(`library:${libraryName}:start`);

const log = (...args) => {
  const str = JSON.stringify(args);
  // eslint-disable-next-line no-console
  console.log(`${libraryName}: ${str}`);
};

log(['the', 'test', 'call']);

module.exports = {
  log,
};

// eslint-disable-next-line no-console
console.log(`library:${libraryName}:end`);
