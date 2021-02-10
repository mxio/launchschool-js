**Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?**

```
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
```

```
if (string1.length === string2.length) {
  return true;
}

if (string1.length === string3.length) {
  return true;
}
```

LS solution:

```
string1.toLowerCase() === string2.toLowerCase(); // true
string1.toLowerCase() === string3.toLowerCase(); // fals
```
