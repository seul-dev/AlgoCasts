// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = vowels;

// function vowels(str) {
//   const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
//   return [...str].filter((char) => vowelSet.has(char.toLowerCase())).length;
// }

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (const char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
