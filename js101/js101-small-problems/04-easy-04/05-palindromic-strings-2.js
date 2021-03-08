function isPalindromicNumber(num) {
  let numToString = num.toString();
  console.log(num)l
  console.log(numToString);
  return num === numToString.split('').reverse().join();
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
