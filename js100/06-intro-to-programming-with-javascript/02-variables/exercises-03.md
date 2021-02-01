**3. What happens when you run the following program? Why do we get that result?**

```
{
  let foo = 'bar';
}

console.log(foo);
```

`ReferenceError: foo is not defined` is returned. `foo`'s scope is within the block, meaning it has block scope and it is and not accessible outside of the block.
