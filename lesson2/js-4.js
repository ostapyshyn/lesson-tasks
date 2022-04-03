function fmap(a, gen) {
  return (...args) => {
    const res = [];
    for (let i = 0; i < args.length; i++) {
      res[i] = args[i];
    }

    return a(gen.apply(null, res));
  };
}

function square(x) {
  return x * x;
}
function add(a, b) {
  return a + b;
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
let squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
