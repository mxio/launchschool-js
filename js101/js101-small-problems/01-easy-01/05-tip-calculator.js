let rlSync = require("readline-sync");

let bill = parseInt(rlSync.question("What is the bill? "));
let tip = parseInt(rlSync.question("What is the tip percentage? "));
let tipTotal = bill * (tip / 100);
let billTotal = bill + tipTotal;

console.log(`The tip is $${tipTotal.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
