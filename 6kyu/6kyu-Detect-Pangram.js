/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
/**
 * 
 * Parameters: string
 * Return:a boolean
 * Examples: The quick brown fox jumps over the lazy dog
 * PseudoCode: 
 * 
 * 
 */


 function isPangram(string) {
	const lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
	const givenStringArray = string.toLowerCase().split("");
	for (let i = 0; i < lettersArray.length; i++) {
		let currentLetter = lettersArray[i];
		if (!givenStringArray.includes(currentLetter)) {
			return false;
		}
	}
	return true;
}
//Short solution
// function isPangram(string) {
// 	return "abcdefghijklmnopqrstuvwxyz"
// 		.split("")
// 		.every((x) => string.toLowerCase().includes(x));
// }

