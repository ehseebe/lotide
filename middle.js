
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arrA, arrB) {
  let result = eqArrays(arrA, arrB);
  if (result === true) {
    console.log("✅ We've got a match!");
  } else {
    console.log("⛔️ No match here");
  }
};

const middle = function(arr) {
  let output = [];
  if (arr.length > 2) { //if the array has more than 2 values
    let middleValue = Math.floor(arr.length / 2); //find the median
    if (arr.length % 2 === 0) { //if the array is even
      output.push(arr[middleValue - 1], arr[middleValue]); //two middle values
    } else { //if the array is odd
      output.push(arr[middleValue]); //single middle value
    }
  } else {
    return output;
  }
  return output;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]