**1. Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:**

```
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
```

```
// create and open file
touch greeter.js
code greeter.js

// code inside file
let name = 'Victor'

console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

// run code
node greeter.js
```
