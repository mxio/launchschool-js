let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, reg) {
  let matches = [];
  arr.forEach(function(string) {
    if (reg.test(string)) {
      matches.push(string);
    }
  })

  return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
