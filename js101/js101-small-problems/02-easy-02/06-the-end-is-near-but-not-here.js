function penultimate(str) {
  let wordsArr = str.split(' ');
  return wordsArr[wordsArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
