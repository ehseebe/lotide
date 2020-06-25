const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const michelinResto = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const michelinStarSearch = (item) => item.stars === 3;

const findKey = function(input, callback) {
  for (let item in input) { //loop IN object
    if (callback(input[item])) { //invoke callback, which compares object value
      return item; //when callback finds truthy, return truthy value
    }
  } return undefined; //else return undefined
};

console.log(assertEqual(findKey(michelinResto, michelinStarSearch), "Akaleri"));