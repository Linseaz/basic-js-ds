const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.firstNode = null;
  }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    const createNode = new ListNode(value);

    if (!this.firstNode) {
      this.firstNode = createNode;
      this.lastNode = createNode;
    } else {
      this.lastNode.next = createNode;
      this.lastNode = createNode;
    }
  }

  dequeue() {
    const value = this.firstNode.value;
    this.firstNode = this.firstNode.next;
    return value;
  }
}

module.exports = {
  Queue
};
