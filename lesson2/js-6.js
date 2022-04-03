function partialAny(fn, ...args) {
  return function (...nArgs) {
    return fn(...args.map((arg) => (arg === undefined ? nArgs.shift() : arg)), ...nArgs);
  };
}
