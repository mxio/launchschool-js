function twice(num) {
  let convertToString = String(num);

  if (convertToString.length % 2 !== 0) {
    return num * 2;
  } else if (convertToString.length % 2 === 0) {
    let halves = convertToString.length / 2;
    let firstHalf = convertToString.slice(0, halves);
    let secondHalf = convertToString.slice(halves, convertToString.length);

    if (firstHalf === secondHalf) {
      return num;
    } else {
      return num * 2;
    }
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
