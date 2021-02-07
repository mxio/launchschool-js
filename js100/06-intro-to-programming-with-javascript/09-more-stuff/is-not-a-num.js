function isNotANumber(value) {
  if (Number.isNaN(value) || Object.is(value, NaN)) {
    return true;
  } else {
    return false;
  }

}

console.log(isNotANumber(NaN));
console.log(isNotANumber(2));
console.log(isNotANumber([1, 2, 3]));
