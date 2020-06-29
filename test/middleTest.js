const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


console.log(eqArrays(assertArraysEqual(middle([]), [])));
console.log(eqArrays(assertArraysEqual(middle([1]), [1]))); // => []
console.log(eqArrays(assertArraysEqual(middle([1, 2]), []))); // => []
console.log(eqArrays(assertArraysEqual(middle([1, 2, 3]), [2]))); // => [2]
console.log(eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))); // => [3]
console.log(eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]))); // => [2, 3]
console.log(eqArrays(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))); // => [3, 4]