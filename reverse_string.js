//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  const array = [];
  for (let i = str.length - 1; i >= 0; i--) {
    array.push(str[i]);
  }
  const result = array.join('');
  return result;
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
  if (str.length == 1) {
    return str;
  }
  return reverseStringRecursive(str.substring(1)) + str[0];
}

console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'
