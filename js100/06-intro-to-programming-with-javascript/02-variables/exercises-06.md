**6. Will this program produce an error when run? Why or why not?**

```
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
```

No, each `FOO` constant has its own block level.
