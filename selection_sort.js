const array = [6, 5, 3, 1, 8, 7, 2, 4];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let smallestIndex;
    for (let j = i; j < length; j++) {
      smallestIndex = j;
      if (array[j] > array[j + 1]) {
        smallestIndex = j + 1;
      }
    }
    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
  return array;
}

const result = selectionSort(array);
console.log(result);
