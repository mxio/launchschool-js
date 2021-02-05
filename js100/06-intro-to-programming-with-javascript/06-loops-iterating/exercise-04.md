**4. Does the following code produce an error? Why or why not? What output does this code send to the console?**

```
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
```

No. The incrementor is within the for loop block so the code executes until `i` is 5. It logs 1 to 5 in the console.
