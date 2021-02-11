**Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.**

```javascript
for (let i = 0; i <= 99; i += 1) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
```

LS Solution:

```javascript
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
```
