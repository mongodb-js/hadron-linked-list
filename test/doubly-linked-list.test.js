'use strict';

const chai = require('chai');
const expect = chai.expect;
const List = require('../lib/doubly-linked-list.js');

describe('DoublyLinkedList', function() {
  describe('#append', function() {
    context('when the data is the first in the list', function() {
      var list = new List();
      var node = list.append('first');

      it('returns the node', function() {
        expect(node.data).to.equal('first');
      });

      it('sets the first node to the data node', function() {
        expect(list.firstNode).to.equal(node);
      });

      it('sets the last node to the data node', function() {
        expect(list.lastNode).to.equal(node);
      });

      it('sets the node data previous node to null', function() {
        expect(node.previousNode).to.equal(null);
      });

      it('sets the node data next node to null', function() {
        expect(node.nextNode).to.equal(null);
      });

      it('sets the size of the list to 1', function() {
        expect(list.size).to.equal(1);
      });
    });

    context('when the data is not the first in the list', function() {

    });
  });

  describe('#constructor', function() {
    context('when no arguments are passed', function() {
      var list = new List();

      it('sets the firstNode to null', function() {
        expect(list.firstNode).to.equal(null);
      });

      it('sets the lastNode to null', function() {
        expect(list.lastNode).to.equal(null);
      });

      it('sets the size to 0', function() {
        expect(list.size).to.equal(0);
      });
    });
  });
});
