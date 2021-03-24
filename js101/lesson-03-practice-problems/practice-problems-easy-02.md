**Question 1**

```js
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

advice.replace("important", "urgent");
```

**Question 2**

```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
```

```js
numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedNumbers);
console.log(numbers);
```

**Question 3**

```js
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);
```

**Question 4**

```js
let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);
console.log(`Four score and ${famousWords}`);
console.log("Four score and ".concat(famousWords));
```

**Question 5**
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 1);

console.log(arr);
```

**Question 6**

```js
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArr = flintstones.flat();

console.log(newArr);
```

**Question 7**

```js
let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

let arr = [];

for (const [key, value] of Object.entries(flintstones)) {
  if (key === "Barney") {
    arr.push(key, value);
  }
}
console.log(arr);
```

**Question 8**

```js
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);
```

**Question 9**

```js
let title = "Flintstone Family Members";
let length = title.length;
let padding = Math.floor((40 - length) / 2);

let centeredText = title.padStart(padding + length, " ");

console.log(centeredText);
```

**Question 10**

```js
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split("").filter((letter) => letter === "t").length;
statement2.split("").filter((letter) => letter === "t").length;
```
