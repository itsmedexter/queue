// create a queue data structure. should be a class with methods add and remove

// create a class called Queue, class name always uppercase
class Queue {
  // method constructs and initialize new object
  constructor() {
    // varialbe that is a new array
    this.data = [];

  }
  // method adds new element in front of queue
  add(record) {
    this.data.unshift(record);
  }
  // return method that removes element at end of queue
  remove() {
    return this.data.pop();
  }
}