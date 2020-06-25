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

//function will return a slice of the array with elements taken from the beginning
//will go until truthy value is returned
//input is array item


const callHome = [4, 4, 5, 5, 6, 1, 6];

const myCallback = (num) => num === 6;

const takeUntil = function(array, callback) {
	const result = [];
	for (let item of array) {
		if (!callback(item)) {
			result.push(item);
		} else {
			return result;
		}
	}
	return result;
	}


console.log(assertArraysEqual(eqArrays(takeUntil(callHome, myCallback))), [4, 4, 5, 5]);




