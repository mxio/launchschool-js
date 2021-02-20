// given string
// initialize new string
// set current character to index
// concatenate first index of string to new string
// compare current character to index in loop
// if same character, continue
// else concatenate to new string

function crunch(str) {
  let newStr = str[0];
  let current = str[0];

  for (let i = 0; i < str.length; i += 1) {
    if (current === str[i]) {
      continue;
    } else {
      current = str[i];
      newStr += str[i];
    }
  }
  console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
