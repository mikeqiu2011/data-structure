let counter = 0;

function inception() {
  if (counter > 3) {
    return 'done';
  }
  counter++;
  inception;
}

const result = inception();
console.log(result); // undefined
