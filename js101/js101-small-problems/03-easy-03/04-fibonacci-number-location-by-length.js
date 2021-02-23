// number * 10 to find index
// if fibonnacci is less than or equal ((number * 10) / number)
// iterate and set length to ((number * 10) / number)

function findFibonacciIndexByLength(number) {
  let places = 1n;

  for (let a = 2; a <= number; a += 1) {
    places *= 10n;
  }

  let arr = [0, 1];
  let index = 0;

  for (let i = 2; i <= arr.length; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
    if (BigInt(arr[i]) / places >= 1) {
      index = arr[i];
      break;
    }
  }
  console.log(BigInt(arr.indexOf(index)));
  return BigInt(arr.indexOf(index));


}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
