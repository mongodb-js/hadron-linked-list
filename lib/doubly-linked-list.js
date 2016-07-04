'use strict';

/**
 * Encapsulates a node in a doubly linked list.
 */
class Node {

  /**
   * Instantiate the node.
   *
   * @param {Node} previousNode - The previous node in the list.
   * @param {Node} nextNode - The next node in the list.
   * @param {Object} data - The node's data.
   */
  constructor(previousNode, nextNode, data) {
    this.previousNode = previousNode;
    this.nextNode = nextNode;
    this.data = data;
  }
}

/**
 * Represents a doubly linked list.
 */
class DoublyLinkedList {

  /**
   * Append the data to the list.
   *
   * @param {Object} data - The data to append.
   *
   * @returns {Node} The data node.
   */
  append(data) {
    if (!this.firstNode) {
      var node = new Node(null, null, data);
      this.firstNode = this.lastNode = node;
      this.size = 1;
      return node;
    }
  }

  /**
   * Instantiate the new doubly linked list.
   */
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.size = 0;
  }
}

module.exports = DoublyLinkedList;
