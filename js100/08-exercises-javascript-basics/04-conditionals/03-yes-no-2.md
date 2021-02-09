**Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.**

From:

```
let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No.');
}
```

To:

```
let randomNumber = Math.round(Math.random());

randomNumber === 1 ? 'Yes!' : 'No.';
```
