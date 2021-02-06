let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray = array.map(num => num.length);

  let filteredArray = newArray.filter(function(num) {
    return num % 2 !== 0;
  })

  return filteredArray;
}

console.log(oddLengths(arr)); // => [1, 5, 3]
