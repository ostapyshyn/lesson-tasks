function map(fn, array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res[i] = fn(array[i]);
  }
  return res;
}
