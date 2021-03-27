let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let occurences = {};

  for (let i = 0; i < vehicles.length; i += 1) {
    if (occurences[vehicles[i]]) {
      occurences[vehicles[i]] += 1;
    } else {
      occurences[vehicles[i]] = 1;
    }
  }

  return printOccurences(occurences);
}

function printOccurences(obj) {
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}` )
  }
}

countOccurrences(vehicles);
