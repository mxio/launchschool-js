**Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.**

Example:

```
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
```

```javascript
let rlSync = require("readline-sync");

let bill = parseInt(rlSync.question("What is the bill? "));
let tip = parseInt(rlSync.question("What is the tip percentage? "));
let tipTotal = bill * (tip / 100);
let billTotal = bill + tipTotal;

console.log(`The tip is $${tipTotal.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
```
