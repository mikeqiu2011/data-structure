function fibonacciRecursive(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const result = fibonacciRecursive(6);
console.log(result);

function fibonacciIterative(n) {
  let first = 0;
  let second = 1;
  for (let i = 1; i < n; i++) {
    let temp = second;
    second = first + second;
    first = temp;
  }
  return second;
}

const result2 = fibonacciIterative(8);
console.log(result2);
