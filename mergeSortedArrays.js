function mergeSortedArrays(arr1, arr2) {
  arr2.forEach((item) => {
    insertItem(arr1, item);
  });

  return arr1;
}

function insertItem(arr, item, cursor = 0) {
  for (let i = cursor; i < arr.length; i++) {
    if (arr[i] > item) {
      console.log(`i: ${i}`);
      arr.splice(i, 0, item);
      return arr;
    }
  }

  arr.push(item);
  return arr;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

result = mergeSortedArrays(arr1, arr2);
console.log(result);
// arr1.splice(3, 0, 5);
// console.log(arr1);
// console.log(insertItem(arr1, 32));
