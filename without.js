
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

const without = function(source, itemsToRemove) {
	let arrayWithout = [];
	for (let i = 0; i < source.length; i++) {
		let okToPush = true;
		for (let j = 0; j < itemsToRemove.length; j++) {
			if (source[i] === itemsToRemove[j]) {
				okToPush = false;
			}
		} if (okToPush) {
			arrayWithout.push(source[i]);
		}
	}
	return arrayWithout;
}



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); 

const words = ["2", "3", "3"];
without(words, ["2"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["2", "3", "3"]);