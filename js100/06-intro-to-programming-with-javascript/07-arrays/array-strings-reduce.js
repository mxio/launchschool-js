let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((newArray, string) => {
    if (string.length % 2 !== 0) {
      newArray.push(string.length);
    }

    return newArray;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
