function checkConsonants(letter) {
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < consonants.length; i += 1) {
    if (letter.toLowerCase() === consonants[i]) {
      return letter.repeat(2);
    } else {
      return letter;
    }
  }
  //return letter;
}

function doubleConsonants(str) {
  let letterArr = str.split('');

  return (letterArr.map(letter => checkConsonants(letter))).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
