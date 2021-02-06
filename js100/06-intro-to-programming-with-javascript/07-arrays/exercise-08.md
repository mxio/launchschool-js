**8. This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.**

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

```
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
```

```
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((newArray, string) => {
    if (string.length % 2 !== 0) {
      newArray.push(string.length);
    }

    return newArray;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
```
