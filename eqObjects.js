const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

//Returns true if both objects have identical keys with identical values.
//specifically, same # of keys, same value for each key
//Otherwise return false

const eqObjects = function(object1, object2) {
	const keyCheck1 = Object.keys(object1);
	const keyCheck2 = Object.keys(object2);
	if (keyCheck1.length !== keyCheck2.length) {
		return false;
	}	for (let key of keyCheck1) {
		//if value for object1[key] is an array, then i should call the function
		if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) { //checking if array, check if type of
				return false;
			} else if (Array.isArray(object1[key]) && Array.isArray(object2[key])){ //are they both array?
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

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
(assertEqual(eqObjects(ab, ba), true));

const abc = {a: "1", b: "2", c: "3"};
(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
(assertEqual(eqObjects(cd, cd2), false)); // => false
