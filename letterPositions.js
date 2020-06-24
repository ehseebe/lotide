
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


const letterPositions = function(sentence) {
	let input = sentence.split(' ').join('');
	const result = {};
	for (let i = 0; i <input.length; i++) {
		let letter = input[i];
		if (!result[letter]) {
			result[letter] = [];
		} 
		result[letter].push(i);
	}
  return result;
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);
