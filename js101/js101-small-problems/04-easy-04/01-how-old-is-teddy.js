function generateRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = generateRandomAge(20, 120);

console.log(`Teddy is ${age} years old!`)
