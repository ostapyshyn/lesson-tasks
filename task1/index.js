function calculate(str) {
  const [leftDots, sign, rightDots] = str.split(' ');

  const num1 = leftDots.length;
  const num2 = rightDots.length;

  const operations = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '//': num1 / num2,
  };

  return '.'.repeat(operations[sign]);
}

console.log(calculate('...... // ..'));
