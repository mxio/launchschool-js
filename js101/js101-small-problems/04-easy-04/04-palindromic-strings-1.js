// Given string
// check if odd or even
// if odd, find center of string by dividing by 2 and rounding up
// set first half to sliced string from beginning of string to center character
// set second half to sliced string from center character to end of string
// check if first half is equal to the reverse of second half
// if even, set split to string length divided by 2
// set first half to sliced string from beginning to split
// second second half to sliced string from split + 1 to end of string
// check if first half is equal to the reverse of second half

function isOdd(str) {
  if (str.length % 2 === 1) {
    return true;
  }
}

function isEven(str) {
  if (str.length % 2 === 0) {
    return true;
  }
}

function isPalindrome(str) {
  let firstHalf = '';
  let secondHalf = [];
  let secondHalfStr = '';

  if (isOdd(str)) {
    let center = Math.ceil(str.length / 2);
    firstHalf = str.slice(0, center);
    secondHalf = (str.slice(center - 1, str.length)).split('').reverse();
    secondHalfStr = secondHalf.join('');

    if (firstHalf === secondHalfStr) {
      return true;
    } else {
      return false;
    }
  }

  if (isEven(str)) {
    let split = str.length / 2;
    firstHalf = str.slice(0, split);
    secondHalf = (str.slice(split, str.length)).split('').reverse();
    secondHalfStr = secondHalf.join('');

    if (firstHalf === secondHalfStr) {
      return true;
    }
    else {
      return false;
    }
  }
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

