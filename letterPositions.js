const letterPositions = function(sentence) {
	let input = sentence.split(' ').join('');
	const result = {};
	for (let i = 0; i <input.length; i++) {
		let letter = input[i];
		if (!result[letter]) {
			result[letter] = [];
		} 
		result[letter].push(i);
	}
  return result;
};

module.exports = letterPositions;

// console.log(letterPositions('hello'));
// assertArraysEqual(letterPositions("hello").e, [1]);
