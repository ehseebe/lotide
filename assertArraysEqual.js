const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrA, arrB) {
	let result = eqArrays(arrA, arrB);
	if (result === true) {
		console.log("✅ We've got a match!")
	} else {
		console.log("⛔️ No match here")
	}
}

module.exports = assertArraysEqual;

