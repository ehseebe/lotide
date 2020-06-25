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

const eqObjects = function(object1, object2) {
	const keyCheck1 = Object.keys(object1);
	const keyCheck2 = Object.keys(object2);
	if (keyCheck1.length !== keyCheck2.length) {
		return false;
	}	for (let key of keyCheck1) {
		//if value for object1[key] is an array, then i should call the function
		if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) { //checking if they are both array, alternatively check if type of
				return false;
			} else if (Array.isArray(object1[key]) && Array.isArray(object2[key])){ //if they both array, send to eqArrays 
				if (!eqArrays(object1[key],object2[key])) { //comparing the values if both are array
					return false;
				}
			} else if (object1[key] !== object2[key]) { //comparing the values
				return false;
			}
		//console.log(object1[key])
		//console.log(object2[key])
	} return true;	
}

const assertObjectsEqual = function(actual, expected) {
	const inspect = require('util').inspect;
	const result = eqObjects(actual, expected);
	if (result === true) {
		return `✅ We've got a match!: ${inspect(actual)} === ${inspect(expected)}`;
	} else {
		return `⛔️ No match here: ${inspect(actual)} !== ${inspect(expected)}`;
	}
} 



const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

console.log(assertObjectsEqual(ab, ba));

const abc = {a: "1", b: "2", c: "3"};
console.log(assertObjectsEqual(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false