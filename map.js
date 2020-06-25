const eqArrays = function(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			} else {
			}
		}
	}
	return true;
}

const assertArraysEqual = function(arrA, arrB) {
	let result = eqArrays(arrA, arrB);
	if (result === true) {
		console.log("✅ We've got a match!")
	} else {
		console.log("⛔️ No match here")
	}
}

const words = ['take', 'it', 'easy', 'stay', 'breezy'];

const print = word => word;

// const results1 = map(words, word => word[0]);
// console.log(results1);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
		results.push(callback(item));
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};


console.log(eqArrays(assertArraysEqual(map(words, print)), ['take', 'it', 'easy', 'stay', 'breezy']));

