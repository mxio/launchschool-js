**What will the following code log to the console and why? Don't run it until you have tried to answer.**

```
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
```

It will log:

```
{
`firstName: 'Jane',
  lastName: 'Doe'
};
```
