const array = [6, 5, 3, 1, 8, 7, 2, 4];

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const result = bubble_sort(array);
console.log(result);
