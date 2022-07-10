const array = [6, 5, 3, 1, 8, 7, 2, 4];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let minIndex = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

const result = selectionSort(array);
console.log(result);
