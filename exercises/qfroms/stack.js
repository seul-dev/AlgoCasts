class Stack {
  constructor() {
    this.data = [];
  }

  get size() {
    return this.data.length;
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
