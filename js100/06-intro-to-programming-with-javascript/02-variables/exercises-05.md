**5. Take a look at this code snippet:**

```
let foo = 'bar';
{
let foo = 'qux';
}

console.log(foo);
```

What does this program log to the console? Why?

It logs `bar` to the console because the `foo` within the block is declared with `let`, making it a separate variable with block scope so logging `foo` outside of the block returns the `foo` that is outside of the block.
