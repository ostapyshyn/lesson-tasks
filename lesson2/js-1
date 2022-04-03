function sequence(start = 0, step = 1) {
  start -= step;

  function gen() {
    return (start += step);
  }

  return gen;
}

let generator = sequence(10, 3);
