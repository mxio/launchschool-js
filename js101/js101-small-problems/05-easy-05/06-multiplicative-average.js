function multiplicativeAverage(arr) {
  let average = 1;

  for (let idx = 0; idx < arr.length; idx += 1) {
    average *= arr[idx];
  }

  return (average / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
