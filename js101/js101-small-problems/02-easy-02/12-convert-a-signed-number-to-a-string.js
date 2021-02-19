function integerToString(integer) {
  let arr = [];
  let tens;

  if (integer === 0) {
    return "0";
  }

  while (integer > 0) {
    ones = integer % 10;
    arr.push(ones);

    integer = (integer / 10) - (ones / 10);
  }

  return arr.reverse().join('');
}

function signedIntegerToString(integer) {
  if (Math.sign(integer) === 1) {
    return `+${integerToString(integer)}`;
  } else if (Math.sign(integer) === -1) {
    let removedNegativeSign = integer + (integer * -2);
    return `-${integerToString(removedNegativeSign)}`;
  } else {
    return integerToString(integer);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
