**1. What does this code log to the console? Why?**

```
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
```

It logs [1, 4, 3] because `array[1]` mutated the array that array1 and array2 points to.
