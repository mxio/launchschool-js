let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

for (let i = 10; i < 41; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`)

}

/*

console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/
