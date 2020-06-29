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

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); 
