**9. What does the following program log to the console? Why?**

```
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
```

```
> console.log(foo.a);
hi
undefined
> console.log(qux);
hello
```

`foo`.a changes to 'hi' while `qux`'s value stays the same as 'hello'. Objects are mutable while strings are not and doesn't mutate the value of `qux`, only `argument2`.
