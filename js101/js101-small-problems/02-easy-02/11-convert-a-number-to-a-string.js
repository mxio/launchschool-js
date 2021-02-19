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

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"
