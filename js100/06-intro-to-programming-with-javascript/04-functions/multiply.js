function getNumbers(prompt) {
  let rlSync = require('readline-sync');
  let number = Number(rlSync.question(prompt));
  return number;
}

function multiplyNumbers(a, b) {
  return a * b;
}


let num1 = getNumbers('Enter the first number: ');
let num2 = getNumbers('Enter the second number: ');

console.log(multiplyNumbers(num1, num2));
