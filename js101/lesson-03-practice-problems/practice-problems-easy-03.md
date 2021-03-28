**Question 1**

```js
let numbers = [1, 2, 3, 4];
```

```js
numbers.length = 0;
```

```js
numbers.slice(3, 3);
```

```js
numbers.splice(0, numbers.length);
```

**Question 2**

```js
console.log([1, 2, 3] + [4, 5]);
```

```js
[1, 2, 3, 4, 5];
```

**Question 3**

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
```

It logs "hello there".

**Question 4**

```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```

It will log `[{ first: "value1" }, { second: "value2" }, 3, 4, 5]`. It remains unchanged.

Answer:
`[{ first: 42 }, { second: "value2" }, 3, 4, 5]`

**Question 5**

```js
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

```js
function isColorValid(color) {
  return color === "blue" || color === "green";
}
```
