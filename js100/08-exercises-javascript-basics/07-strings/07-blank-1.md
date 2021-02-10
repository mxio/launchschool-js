**Write a function that checks whether a string is empty or not. For example:**

```
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
```

```
function isBlank(string) {
  return string === '';
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
```

LS solution:

```
function isBlank(string) {
  return string.length === 0;
}
```
