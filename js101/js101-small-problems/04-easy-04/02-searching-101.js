let readline = require('readline-sync');

let firstNumber = readline.question('Enter the 1st number: ');
let secondNumber = readline.question('Enter the 2nd number: ');
let thirdNumber = readline.question('Enter the 3rd number: ');
let fourthNumber = readline.question('Enter the 4th number: ');
let fifthNumber = readline.question('Enter the 5th number: ');
let lastNumber = readline.question('Enter the last number: ');

let arr = [];
arr.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

function findNumber(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (Number(arr[index]) === Number(lastNumber)) {
      return `The number ${lastNumber} appears in ${arr.join(',')}.`;
    }
  }

  return `The number ${lastNumber} does not appear in ${arr.join(',')}.`;
}

console.log(findNumber(arr));
