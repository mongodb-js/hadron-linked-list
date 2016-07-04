'use strict';

const chai = require('chai');
const expect = chai.expect;
const List = require('../lib/doubly-linked-list.js');

describe('DoublyLinkedList', function() {
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
