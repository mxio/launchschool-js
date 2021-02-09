**What will the following code log to the console and why? Don't run it until you have tried to answer.**

```
console.log(greeting);

var greeting = 'Hello world!';
```

'Hello world!'

Answer:
`greeting` is not defined due to the declaration using `var` which hoists it to the top with no value until it is set to `Hello world!` after the `console.log`.

```
var greeting;

console.log(greeting);

greeting = 'Hello world!'
```
