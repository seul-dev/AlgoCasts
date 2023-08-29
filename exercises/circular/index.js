// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  const nodeSet = new Set();

  for (const node of list) {
    if (nodeSet.has(node)) {
      return true;
    }

    nodeSet.add(node);
  }

  return false;
}

module.exports = circular;

// function circular(list) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }

//   return false;
// }
