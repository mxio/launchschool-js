// Given set of arrays
// loop through both arrays
// if arr1 does not equal current, push to new array

function union(arr1, arr2) {
  let combinedArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        arr2.splice(arr2.indexOf(arr2[j]), 1);
      }
    }
  }

  combinedArr = arr1.concat(arr2);
  return combinedArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
