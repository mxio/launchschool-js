let munstersDescription = "The Munsters are creepy and spooky.";

let newSentence = munstersDescription.split('').map(char => {
  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
});

console.log(newSentence.join(''));
