function shortLongShort(firstString, secondString) {
  let concatenatedString;

  if (firstString.length > secondString.length) {
    return concatenatedString = secondString + firstString + secondString;
  } else {
    return concatenatedString = firstString + secondString + firstString;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
