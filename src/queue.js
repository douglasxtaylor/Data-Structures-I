class Queue {
  constructor() {
    this.waitList = [];
  }
  enqueue(patient) {
    this.waitList.push(patient);
  }
  dequeue() {
    return this.waitList.shift();
  }
  get size() {
    return this.waitList.length;
  }
}

module.exports = Queue;
