function xor(a, b) {
  if (a || b) {
    return true;
  } else if (a && b) {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
