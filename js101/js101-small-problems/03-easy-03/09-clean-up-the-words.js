function cleanUp(str) {
  let alphabets = /[a-z]/g;
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    if (!(strArr[i].match(alphabets))) {
      strArr[i] = ' ';
    }
  }
  console.log(strArr);
  let newStr = strArr.join('');
  console.log(newStr);
}

cleanUp("---what's my +*& line?");    // " what s my line "
