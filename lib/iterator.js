'use strict';

/**
 * An iterator for a linked list that returns data. The iteration
 * happens in a forward direction.
 */
class Iterator {

  /**
   * Instantiate an iterator with the first node.
   *
   * @param {Node} firstNode - The first node in the list.
   */
  constructor(firstNode) {
    this.node = firstNode;
  }

  /**
   * Get the next node's data in the list.
   *
   * @returns {Object} The next node's data.
   */
  next() {
    var node = this.node;
    if (node) {
      this.node = node.nextNode;
      return node.data;
    }
    return null;
  }

  /**
   * Does the iterator have a next node?
   *
   * @returns {Boolean} If another node is in the list.
   */
  hasNext() {
    return this.node !== null;
  }
}

module.exports = Iterator;
