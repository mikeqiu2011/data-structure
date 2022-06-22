function getFirstRecurChar(arr) {
  const hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (hashtable[element]) {
      return element;
    } else {
      hashtable[element] = 1;
    }
  }
  return undefined;
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [1, 2, 2, 1, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];

console.log(getFirstRecurChar(arr1));
console.log(getFirstRecurChar(arr2));
console.log(getFirstRecurChar(arr3));
