// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

//RegExp
//replace()
///[^\w]/g 단어 문자가 아닌 것! 찾기 /\W/g
// character map

// function anagrams(stringA, stringB) {
//   const lookUp = new Map();

//   const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   if (strA.length !== strB.length) {
//     return false;
//   }

//   for (const char of strA) {
//     const count = (lookUp.get(char) || 0) + 1;
//     lookUp.set(char, count);
//   }

//   for (const char of strB) {
//     if (!lookUp.get(char)) {
//       return false;
//     }
//     lookUp.set(char, lookUp.get(char) - 1);
//   }
//   return true;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }
//   return charMap;
// }
