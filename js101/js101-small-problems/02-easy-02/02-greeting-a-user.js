let readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name[name.length - 1] === '!' ) {
  let removeExclamation = name.split('');
  removeExclamation.pop();

  let noExclamation = removeExclamation.join('');
  console.log(`HELLO ${noExclamation}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
