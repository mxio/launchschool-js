**Question 1**
No, it will not raise an error.

Bonus: Since it is an empty item, it will output as undefined

**Question 2**

```js
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!");
str2.endsWith("!");
```

**Question 3**

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let agesKeys = Object.keys(ages);
let contains = false;

for (let i = 0; i < agesKeys.length; i += 1) {
  if (agesKeys[i] === "Herman") {
    contains = true;
  }
}

contains;
```

Easier solution:

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty("Spot");
```

**Question 4**

```js
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let strArr = munstersDescription.toLowerCase().split("");
let newStr = strArr[0][0].toUpperCase();

for (let i = 1; i < strArr.length; i += 1) {
  newStr += strArr[i];
}

newStr;
```

**Question 5**

```js
console.log(false == "0"); // true
console.log(false === "0"); // false
```

**Question 6**

```js
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(additionalAges, ages);
```

**Question 7**

```js
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes("Dino");
str2.includes("Dino");
```

**Question 8**

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");

flintstones;
```

**Question 9**

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino", "Hoppy");

flintstones;
```

**Question 10**

```js
// Expected return value:
// => 'Few things in life are as important as '

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

let index = advice.indexOf("house");

advice.substring(0, index);
```
