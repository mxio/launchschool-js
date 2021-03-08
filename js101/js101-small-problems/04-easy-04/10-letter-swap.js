function swap(str) {
  let wordsArr = str.split(' ');
  let eachWord = [];
  let last;
  let first;
  let newArr = [];
  let newStr = '';

  wordsArr.forEach(word => {
    eachWord = word.split('');
    last = eachWord.pop();
    first = eachWord.shift();
    eachWord.splice(0, 0, last);
    eachWord.splice(eachWord.length, 0, first);
    newArr.push(eachWord.join(''));
  });

  newStr = newArr.join(' ');
  return newStr;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
