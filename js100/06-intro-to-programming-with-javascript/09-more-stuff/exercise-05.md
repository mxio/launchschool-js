**5. What does the following function do?**

```
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
```

It splits the string at spaces and returns an array of each word, then reverses the order of the array and create a new array with the length of each word.
