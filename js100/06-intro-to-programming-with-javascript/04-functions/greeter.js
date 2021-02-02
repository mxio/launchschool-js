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
