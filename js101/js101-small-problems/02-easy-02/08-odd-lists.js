function oddities(arr) {
  let odds = [arr[0]];

  for (let i = 1; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      odds.push(arr[i]);
    } else if (arr === []) {
      odds = [];
    }

  }
  return odds;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
