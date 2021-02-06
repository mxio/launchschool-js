let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkArrays(arr) {
  let answer;
  let filteredArray = [];

  filteredArray = arr.filter(num => num === 3);

  if (typeof filteredArray === "undefined" || filteredArray.length === 0) {
    answer = false;
  }

  filteredArray.forEach(function(num) {
    if (num === 3) {
      answer = true;
    }
  })

  return answer;
}

console.log(checkArrays(numbers1));
console.log(checkArrays(numbers2));
console.log(checkArrays(numbers3));
