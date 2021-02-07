function findMax(arr) {
  return arr.reduce(function(accumulator, num) {
    return Math.max(accumulator, num)
  })
}

console.log(findMax([1, 6, 3, 2]));
console.log(findMax([-1, -6, -3, -2]));
console.log(findMax([2, 2]));
