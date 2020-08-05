// create a queue data structure. should be a class with methods add and remove. First one in, last one out.

// create a class called Queue, class name always uppercase
class Queue {
  // method constructs and initialize new object
  constructor() {
    // varialbe that is a new array, this is reference to an object
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