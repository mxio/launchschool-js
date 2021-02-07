**6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.**

Example

```
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
```

```
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, reg) {
  let matches = [];
  arr.forEach(function(string) {
    if (reg.test(string)) {
      matches.push(string);
    }
  })

  return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
```
