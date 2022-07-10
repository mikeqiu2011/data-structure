let counter = 0;
function fibonacci(n) {
  counter++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(8);
console.log(result);
console.log(counter); // 61!!
