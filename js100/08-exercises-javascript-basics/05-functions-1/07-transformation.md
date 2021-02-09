**Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.**

```
let str = 'Captain Ruby';
let arr = str.split(' ');

arr[1] = 'Javascript';
let newStr = arr.join(' ');

console.log(newStr);
```

LS easiest solution:

```
'Captain Ruby'.replace('Ruby', 'JavaScript');
```
