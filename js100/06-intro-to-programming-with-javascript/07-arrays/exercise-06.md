**6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).**

```
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

```
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray = array.map(num => num.length);

  let filteredArray = newArray.filter(function(num) {
    return num % 2 !== 0;
  })

  return filteredArray;
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```
