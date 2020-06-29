//function accepts an [array of strings]
//keys = true in allItems should be accounted for in {output}

const countOnly = function(allItems, itemsToCount) {
	const results = {};
	for(const item of allItems) {
		console.log(item);
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	return results;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

module.exports = countOnly;
