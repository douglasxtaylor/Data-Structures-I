class Stack { // arranged this stack into something like an email subscription list, although the data would probably not be stored this way.
  constructor() {
    this.storage = [];// push or pop from here
  }
  push(node) { // data entry into the node
    this.storage.push(node);
  }
  pop() { // pops the last one off. LIFO
    return this.storage.pop();
  }
  get size() { // we have getters and setters in ES6. Size is a getter.
    return this.storage.length;
  }
}
const subscriptionList = new Stack();
module.exports = Stack;
