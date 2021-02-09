**Determine the output that the following code will log to the console.**

```
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;
```

It will return an error saying `multiplesOfThree` is undefined because there are no parantheses to call the function.
