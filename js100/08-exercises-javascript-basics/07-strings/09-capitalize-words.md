**Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.**

```
let string = 'launch school tech & talk';

function capitalize(string) {
  let wordsArr = string.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < wordsArr.length; i += 1) {
    let word = wordsArr[i];

    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalizedWords.join(' ');
}

capitalize(string);
```
