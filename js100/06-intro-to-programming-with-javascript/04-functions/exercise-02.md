**2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.**

```
let rlSync = require('readline-sync');

function firstName(firstName) {
  firstName = rlSync.question('What is your first name? ');
  return firstName;
}

function lastName(lastName) {
  lastName = rlSync.question('What is your last name? ');
  return lastName;
}

console.log(`Hello, ${firstName('Mai')} ${lastName('Xiong')}!`);
```

Launchschool solution:

```
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
```

There is no global variable in this solution.
