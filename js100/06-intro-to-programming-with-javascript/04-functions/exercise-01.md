**2. What does this code log to the console? Does executing the foo function affect the output? Why or why not?**

```
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

```
> foo();
undefined
> console.log(bar);
1
```

Executing `foo` does not affect the output because there is no return statement so it only prints out undefined. A separate `bar` is defined within `foo` which doesn't affect `bar` on line 1.
