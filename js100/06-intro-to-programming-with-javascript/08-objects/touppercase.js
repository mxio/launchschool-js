let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);

let newArr = arr.map(key => key.toUpperCase());

console.log(newArr);
