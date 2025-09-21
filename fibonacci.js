function generateFibonacci(range) {
  const fib = [0, 1];
  for (let i = 2; i < range; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

console.log(generateFibonacci(7));
