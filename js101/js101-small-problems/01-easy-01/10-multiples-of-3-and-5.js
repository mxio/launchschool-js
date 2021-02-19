// given number
// set count to 0
// if numbers up to number is a multiple of 3 or 5, add to count

function multisum(num) {
  let count = 0;

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }

  return count;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
