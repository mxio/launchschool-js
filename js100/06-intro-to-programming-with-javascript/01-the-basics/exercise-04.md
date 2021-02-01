**4. Explain why this code logs '510' instead of 15.**

```
console.log('5' + 10);
```

Because of implicit type coercion, the statement turns 10 into a string and concatenates it with '5'.
