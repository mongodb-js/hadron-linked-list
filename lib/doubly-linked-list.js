'use strict';

const Iterator = require('./iterator');

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
   * Instantiate the new doubly linked list.
   */
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.size = 0;
  }

  /**
   * Insert data after the provided node.
   *
   * @param {Node} node - The node to insert after.
   * @param {Object} data - The data to insert.
   *
   * @returns {Node} The inserted node.
   */
  insertAfter(node, data) {
    var newNode = new Node(node, node.nextNode, data);
    if (node.nextNode) {
      node.nextNode.previousNode = newNode;
    } else {
      this.lastNode = newNode;
    }
    node.nextNode = newNode;
    this.size += 1;
    return newNode;
  }

  /**
   * Insert data before the provided node.
   *
   * @param {Node} node - The node to insert before.
   * @param {Object} data - The data to insert.
   *
   * @returns {Node} The inserted node.
   */
  insertBefore(node, data) {
    var newNode = new Node(node.previousNode, node, data);
    if (node.previousNode) {
      node.previousNode.nextNode = newNode;
    } else {
      this.firstNode = newNode;
    }
    node.previousNode = newNode;
    this.size += 1;
    return newNode;
  }

  /**
   * Insert data at the beginning of the list.
   *
   * @param {Object} data - The data to insert at the beginning.
   *
   * @returns {Node} The data node.
   */
  insertBeginning(data) {
    if (!this.firstNode) {
      var node = new Node(null, null, data);
      this.firstNode = this.lastNode = node;
      this.size += 1;
      return node;
    }
    return this.insertBefore(this.firstNode, data);
  }

  /**
   * Insert data at the end of the list.
   *
   * @param {Object} data - The data to insert at the end.
   *
   * @returns {Node} The data node.
   */
  insertEnd(data) {
    if (!this.lastNode) {
      return this.insertBeginning(data);
    }
    return this.insertAfter(this.lastNode, data);
  }

  iterator() {
    return new Iterator(this.firstNode);
  }

  /**
   * Remove the node from the list.
   *
   * @param {Node} node - The node to remove.
   *
   * @returns {DoublyLinkedList} The list with the node removed.
   */
  remove(node) {
    if (node.previousNode) {
      node.previousNode.nextNode = node.nextNode;
    } else {
      this.firstNode = node.nextNode;
    }
    if (node.nextNode) {
      node.nextNode.previousNode = node.previousNode;
    } else {
      this.lastNode = node.previousNode;
    }
    node.nextNode = node.previousNode = null;
    this.size -= 1;
    return this;
  }
}

module.exports = DoublyLinkedList;
