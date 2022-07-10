function addTo80(n) {
  console.log('takes long time');
  return n + 80;
}

function memorizedAddTo80(n) {
  let cache = {};
  function inner(n) {
    if (n in cache) {
      return cache[n];
    } else {
      const result = addTo80(n);
      cache[n] = result;
      return result;
    }
  }

  return inner(n);
}

const test1 = memorizedAddTo80(5); // only the first time has real calculation
const test2 = memorizedAddTo80(5);
const test3 = memorizedAddTo80(5);

console.log(test1);
console.log(test2);
console.log(test3);
