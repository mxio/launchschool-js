**2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:**

n! Expansion Result
1! 1 1
2! 1 _ 2 2
3! 1 _ 2 _ 3 6
4! 1 _ 2 _ 3 _ 4 24
5! 1 _ 2 _ 3 _ 4 _ 5 120

Use a loop of some kind to solve this. Don't use recursion; we'll do that later.

You may assume that the argument is always a positive integer.

Examples

```
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```

I couldn't solve this one. Study this further. Launchschool's solution:

```
function factorial(num) {
  let result = 1;
  for (let counter = num; counter > 0 ; counter--) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

```
