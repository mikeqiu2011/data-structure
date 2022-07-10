const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const index = (array.length + 1) / 2;
  let left = array.slice(0, index);
  let right = array.slice(index, array.length - 1);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex < left.length || rIndex < right.index) {
    if (left[lIndex] <= right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      lIndex++;
    }
  }
  return result;
}

const answer = mergeSort(numbers);
console.log(answer);
