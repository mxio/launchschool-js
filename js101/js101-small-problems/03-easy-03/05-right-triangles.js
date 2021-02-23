// Given integer
// iterate down from the integer
// for the spaces, let space = repeat using (integer - 1) and decrement integer
// for the stars, let star = repeat and incrementing up
// print spaces and stars together with newline for each loop

function triangle(num) {
  let spaces = ' ';
  let stars = '*';
  let decrementer;

  for (let i = num - 1; i >= 0; i -= 1) {
    decrementer = num - i;
    console.log(`${spaces.repeat(i)}${stars.repeat(i - (i - decrementer))}`);
  }
}

triangle(5);
triangle(9);
