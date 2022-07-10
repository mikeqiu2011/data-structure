const array = [6, 5, 3, 1, 8, 7, 2, 4];

function bubbleSort(array) {
  // O(n^2)
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // swap numbers
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const result = bubbleSort(array);
console.log(result);
