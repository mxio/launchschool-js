**What will the following code log to the console and why? Don't run it until you have tried to answer.**

```
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

It will log 1 and then 2.

Answer:
Reference error. the `a` on line 6 shadows the `a` on line 2, meaning, the `a` on line 6 has the full scope in the `if` block and so when logging `a`, it is attempting to log the `a` from line 6 only.
