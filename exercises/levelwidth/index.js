// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const stopper = 's';

  const cache = [root, stopper];

  while (cache.length > 1) {
    const node = cache.shift();

    if (node === stopper) {
      counters.push(0);
      cache.push(stopper);
    } else {
      counters[counters.length - 1]++;
      cache.push(...node.children);
    }
  }
  return counters;
}

module.exports = levelWidth;
