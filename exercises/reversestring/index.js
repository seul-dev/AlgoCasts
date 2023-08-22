// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce((reversed, cur) => cur + reversed, '');
}

module.exports = reverse;

// #1 solution
//turn string into an array
//call 'reverse()' method on the array
//join the array back into a string
//return the result

// function reverse(str) {
//   return [...str].reverse().join('');
// }

// #2 solution
// create an empty string called 'reversed'
// for each character in the provided string
// take the character and add it to the start of 'reversed'
// return the variable 'reversed'

// function reverse(str) {
//   let reversed = '';
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

//  #3 solution
//
