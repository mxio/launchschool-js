function removeNonLetters(str) {
  let wordsArr = str.toLowerCase().split('');
  let newArr = [];

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i] >= 'a' && wordsArr[i] <= 'z' || wordsArr[i] === ' ') {
      newArr.push(wordsArr[i]);
    }
  }

  return newArr.join('');
}

function wordSizes(str) {
  let wordCount = {};
  let newStr = removeNonLetters(str);
  let words = newStr.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length === 0) {
      continue;
    }

    if (!wordCount[words[i].length]) {
      wordCount[words[i].length] = 0;
    }

    wordCount[words[i].length] += 1;
  }

  return wordCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
