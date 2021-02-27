/* eslint-disable max-lines-per-function */
// Given year
// find century with year / 100
// if result is less than 100, it is first century, and so on
// convert year to string and check for last character
// if century ends in 1, append 'st'
// if century ends in 2, append 'nd'
// if century ends in 3, append 'rd'
// else append 'th'

function century(year) {
  let conversion = Math.ceil(year / 100);
  let century = 0;

  if (conversion < 1) {
    century = 1;
  } else {
    century = conversion;
  }

  let centuryStr = String(century);
  let centuryEnding = centuryStr[centuryStr.length - 1];

  if (centuryStr[centuryStr.length - 2] === '1') {
    centuryStr += 'th';
  } else if (centuryEnding === '1') {
    centuryStr += 'st';
  } else if (centuryEnding === '2') {
    centuryStr += 'nd';
  } else if (centuryEnding === '3') {
    centuryStr += 'rd';
  } else {
    centuryStr += 'th';
  }

  return centuryStr;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
