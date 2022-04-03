function take(func, count) {
  const res = [];

  for (let i = 0; i < count; i++) {
    res[i] = func();
  }

  return res;
}
