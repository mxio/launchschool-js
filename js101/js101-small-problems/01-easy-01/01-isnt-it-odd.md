**Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.**

**Problem**
Input: number
Output: boolean

Mental model/summary:
Given an integer, if the number's absolute value is odd, return true.

**Examples/Test Cases:**

```javscript
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```

**Data Structure**
Number into boolean
Conditional to check if odd

**Algorithm**

1. Check if number is 0, if so, return `false`
2. Find absolute value of integer. If number is less than 0, `number + (number * 2)`
3. Check if number is odd

Code

```javascript
function isOdd(integer) {
  let absoluteValue;

  if (integer === 0) {
    return false;
  }

  if (integer < 0) {
    absoluteValue = integer + integer * 2;
  } else {
    absoluteValue = integer;
  }

  if (absoluteValue % 2 != 0) {
    return true;
  }

  return false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```

LS Solution:

```javascript
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}
```
