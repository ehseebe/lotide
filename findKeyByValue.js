const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(input, inputValue) {
	const entries = Object.entries(input);
	for (let item of entries) {
		if (item[1] === inputValue) {
			return item[0];
		}
	}
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
	drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);