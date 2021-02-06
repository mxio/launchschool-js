**9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:**

```
> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];
```

Return true or false depending on each result.

```
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkArrays(arr) {
  let answer;
  let filteredArray = [];

  filteredArray = arr.filter(num => num === 3);

  if (typeof filteredArray === "undefined" || filteredArray.length === 0) {
    answer = false;
  }

  filteredArray.forEach(function(num) {
    if (num === 3) {
      answer = true;
    }
  })

  return answer;
}

console.log(checkArrays(numbers1));
console.log(checkArrays(numbers2));
console.log(checkArrays(numbers3));
```

Easier answer from Launch School:

```
numbers1.includes(3);
```
