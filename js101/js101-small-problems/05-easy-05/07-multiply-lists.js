function multiplyList(arr1, arr2) {
  let products = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    products.push(arr1[idx] * arr2[idx]);
  }

  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
