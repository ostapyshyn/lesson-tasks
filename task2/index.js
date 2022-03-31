function calculate(N) {
  if (N < 0) {
    return null;
  }

  const result = [];
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = i; j < N + i; j++) {
      row.push(abc[j % 26]);
    }
    result.push(row.join(' '));
  }

  return result.join('\n');
}

console.log(calculate(5));
