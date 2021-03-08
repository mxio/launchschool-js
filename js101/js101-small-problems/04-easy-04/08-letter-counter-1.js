/* eslint-disable max-lines-per-function */
// Given string
// split string into array
// loop through array
// set object
// for each word, set the key to length of word
// if key is the same as length of word, increment the value


function wordSizes(str) {
  let wordCount = {};
  let words = str.split(' ');

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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
