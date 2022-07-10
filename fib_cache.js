let counter = 0;
function fibonacci(n) {
  counter++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// const result = fibonacci(10);
// console.log(result);
// console.log(counter); // 61!!

let counter2 = 0;
const cache = {};
function fibonacciMaster(n) {
  counter2++;
  if (n < 2) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  } else {
    const result = fibonacciMaster(n - 1) + fibonacciMaster(n - 2);
    cache[n] = result;
    return result;
  }
  //   return fibonacciMaster(n - 1) + fibonacciMaster(n - 2);
}

const result = fibonacciMaster(10);
console.log(result);
console.log(counter2); // 19!!
