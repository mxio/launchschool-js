**8. Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.**

**Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.**

**Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.**

```
function isNotANumber(value) {
  if (Number.isNaN(value) || Object.is(value, NaN)) {
    return true;
  } else {
    return false;
  }

}

console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
console.log(isNotANumber([1, 2, 3]));
```

Not sure if this works.

Launch School solution:

```
function isNotANumber(value) {
  return value !== value;
}
```

This works since NaN is the only JS value that is not === to itself.
