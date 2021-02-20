// if empty string, construct each line and print concatenated lines with newline
// else set box lines to each line of empty box
// set beginning and ending of each line for the box
// iterate through length of string
// set innerString to line's second character with each iteration
// join beginning string with innerstring and ending of line
// on line 3, concatenate string's index
// print box by concatenating each line together with newline

function logInBox(str) {
  let emptyLine1;
  let emptyLine2;
  let emptyLine3;
  let emptyLine4;
  let emptyLine5;

  let boxLine1;
  let boxLine2;
  let boxLine3;
  let boxLine4;
  let boxLine5;

  let innerString1And5 = '';
  let innerString2And4 = '';
  let innerString3 = str;

  if (str === '') {
    emptyLine1 = '+--+';
    emptyLine2 = '|  |';
    emptyLine3 = '|  |';
    emptyLine4 = '|  |';
    emptyLine5 = '+--+';
    console.log(`${emptyLine1}\n${emptyLine2}\n${emptyLine3}\n${emptyLine4}\n${emptyLine5}`);
  } else {
    plusMinusBeginning = '+-';
    plusMinusEnding = '-+'
    separatorBeginning = '| ';
    separatorEnding = ' |';

    for (let index = 0; index < str.length; index += 1) {
      innerString1And5 += plusMinusBeginning[1];
      innerString2And4 += separatorBeginning[1];
    }

    boxLine1 = plusMinusBeginning + innerString1And5 + plusMinusEnding;
    boxLine2 = separatorBeginning + innerString2And4 + separatorEnding;
    boxLine3 = separatorBeginning + innerString3 + separatorEnding;
    boxLine4 = boxLine2;
    boxLine5 = boxLine1;

    console.log(`${boxLine1}\n${boxLine2}\n${boxLine3}\n${boxLine4}\n${boxLine5}`);
  }
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
