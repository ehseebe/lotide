//const callHome = [4, 4, 5, 5, 6, 1, 6];

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


	module.exports = takeUntil;
	module.exports = myCallback;


// console.log(assertArraysEqual(eqArrays(takeUntil(callHome, myCallback))), [4, 4, 5, 5]);




