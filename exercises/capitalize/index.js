// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.replace(/\b(\w)/g, (match) => match.toUpperCase());
}

// /\b\w/g

module.exports = capitalize;

// function capitalize(str) {
//   return str
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
// }
