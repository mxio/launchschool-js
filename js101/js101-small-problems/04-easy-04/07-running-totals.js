function runningTotal(arr) {
  let newArr = [arr[0]];

  for (let i = 1; i < arr.length; i += 1) {
    newArr.push(newArr[i - 1] + arr[i]);
  }

  console.log(newArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
