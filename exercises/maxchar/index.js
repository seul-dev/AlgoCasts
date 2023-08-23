// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = new Map();
  for (const char of str) {
    const count = (map.get(char) || 0) + 1;
    map.set(char, count);
  }

  let max = 0;
  let maxChar = '';
  map.forEach((count, char) => {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  });
  return maxChar;
}

module.exports = maxChar;
