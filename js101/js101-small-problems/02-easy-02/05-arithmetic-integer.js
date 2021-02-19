let readline = require('readline-sync');

let integer1 = Number(readline.question('Enter the first number\n'));
let integer2 = Number(readline.question('Enter the second number\n'));

console.log(`${integer1} + ${integer2} = ${integer1 + integer2}`);
console.log(`${integer1} - ${integer2} = ${integer1 - integer2}`);
console.log(`${integer1} * ${integer2} = ${integer1 * integer2}`);
console.log(`${integer1} / ${integer2} = ${Math.floor((integer1 / integer2))}`);
console.log(`${integer1} % ${integer2} = ${integer1 % integer2}`);
console.log(`${integer1} ** ${integer2} = ${integer1 ** integer2}`);
