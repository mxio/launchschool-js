**3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.**

```
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
```

```
touch multiply.js
code multiply.js

// within the file
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
```
