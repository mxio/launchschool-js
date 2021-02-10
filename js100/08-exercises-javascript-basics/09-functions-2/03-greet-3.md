**Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.**

```
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}
```

Calling greet() should log Good morning, Launch School! to the console.

```
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  return `${greeting()}, ${recipient()}!`;
}

greet();
```