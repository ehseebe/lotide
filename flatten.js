
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

const flatten = function(messyArr) {
   var flattenedArr = [];
   messyArr.forEach(flatten)
   function flatten (item) {
     if (Array.isArray(item)) {
        return item.forEach(flatten);
     }
     return flattenedArr.push(item);
   }
   return flattenedArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10]));