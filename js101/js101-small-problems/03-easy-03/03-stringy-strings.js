// given number
// initiate string variable
// set index to 1
// set index to less than or equal to number
// if index divided by 2 is 1, concatenate 1 to string
// else concatenate 0 to string
// return string

function stringy(num) {
  let str = '';

  for (let i = 1; i <= num; i += 1) {
    if (i % 2 === 1) {
      str += 1;
    } else {
      str += 0;
    }
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
