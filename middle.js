const middle = function(arr) {
  let output = [];
  if (!Array.isArray) {
    return [];
  } else if (arr.length > 2) { //if the array has more than 2 values
    let middleValue = Math.floor(arr.length / 2); //find the median
    if (arr.length % 2 === 0) { //if the array is even
      output.push(arr[middleValue - 1], arr[middleValue]); //two middle values
    } else { //if the array is odd
      output.push(arr[middleValue]); //single middle value
    }
  }
  return output;
}

module.exports = middle;
