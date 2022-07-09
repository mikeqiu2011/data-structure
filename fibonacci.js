// 0,1,1,2,3,5,8,13,21,34,55,89,144..

// given the index, return the corresponding value in the sequence
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const result = fibonacciRecursive(8);
console.log(result);

function fibonacciIterative(n) {
  const array = [0, 1];
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
}

const result2 = fibonacciIterative(10);
console.log(result2);
