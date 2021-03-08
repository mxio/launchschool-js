let readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));
let currentYear = 2021;

let retirementYear = currentYear + retirementAge;
let yearsLeft = retirementAge - age;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
console.log(`You have only ${yearsLeft} years of work to go!`);
