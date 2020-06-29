
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
		results.push(callback(item));
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};

module.export = map;


// console.log(eqArrays(assertArraysEqual(map(words, print)), ['take', 'it', 'easy', 'stay', 'breezy']));

