// if length is odd, push up to half + 1

// eslint-disable-next-line max-lines-per-function
function halvsies(arr) {
  let arr1 = [];
  let arr2 = [];
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    count = i;

    if (arr.length % 2 === 1 && count < Math.ceil(arr.length / 2)) {
      arr1.push(arr[i]);
    } else if (count < arr.length / 2) {
      arr1.push(arr[i]);
    }

    if (arr.length % 2 === 1 && count > Math.ceil(arr.length / 2)) {
      arr2.push(arr[i]);
    } else if (count >= arr.length / 2) {
      arr2.push(arr[i]);
    }
  }

  let newArr = [];
  newArr.push(arr1, arr2);
  return newArr;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
