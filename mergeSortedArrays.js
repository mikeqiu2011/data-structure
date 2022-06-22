function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const sortedArray = [];
  let item1 = arr1[0];
  let item2 = arr2[0];
  let i = 0;
  let j = 0;

  while (item1 || item2) {
    console.log(item1, item2);
    if (!item2 || item1 < item2) {
      // 31 < undefined is false, item1 will never get pushed
      // 31, unde
      sortedArray.push(item1);
      item1 = arr1[i++];
    } else {
      sortedArray.push(item2);
      item2 = arr2[j++];
    }
  }

  return sortedArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

result = mergeSortedArrays(arr1, arr2);
console.log(result);
