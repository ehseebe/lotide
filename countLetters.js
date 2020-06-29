//input string
//output a COUNT of letters in the sentence
//ex. input: LHL, output: L: 2, H:1

const countLetters = function(str) {
	let arrOfWords = str.split(' ').join('');
	let result = {};
	for (let letter of arrOfWords) {
		result[letter] = (result[letter] || 0) + 1;
		//**this block is replaced by ln17!
		//if (result[letter] === undefined) {
		//	result[letter] = 1;  
		//} else {
		//	result[letter] += 1;
		//}
		//console.log("result[letter]: ", result[letter]);
	}
	return result;
}

// console.log(countLetters('pineapple is the best fruit'));

module.exports = countLetters;