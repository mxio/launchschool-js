**Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().**

```
repeat(3, 'ha'); // 'hahaha'
```

```
function repeat(repetition, string) {
  let combinedString = string

  for (let i = 1; i < repetition; i += 1) {
    combinedString += string;
  }

  console.log(combinedString);
}

repeat(3, 'ha');
```
