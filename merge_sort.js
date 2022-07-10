const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  //   console.log(left, right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex < left.length && rIndex < right.index) {
    if (left[lIndex] < right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      lIndex++;
    }
  }
  console.log(left, right);

  return result.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
