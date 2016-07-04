'use strict';

const chai = require('chai');
const expect = chai.expect;
const List = require('../lib/doubly-linked-list.js');
const Examples = require('./shared-examples');

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

  describe('#insertAfter', function() {
    context('when the node is the last node in the list', function() {
      var list = new List();
      var firstNode = list.insertBeginning('first');
      var nextNode = list.insertAfter(firstNode, 'second');

      it('returns the new node', function() {
        expect(nextNode.data).to.equal('second');
      });

      it('sets the new node previous node', function() {
        expect(nextNode.previousNode).to.equal(firstNode);
      });

      it('sets the next node on the previous node', function() {
        expect(firstNode.nextNode).to.equal(nextNode);
      });

      it('sets the new node next node to null', function() {
        expect(nextNode.nextNode).to.equal(null);
      });

      it('sets the list size', function() {
        expect(list.size).to.equal(2);
      });
    });

    context('when the node is not the last node in the list', function() {
      var list = new List();
      var firstNode = list.insertBeginning('first');
      var secondNode = list.insertAfter(firstNode, 'second');
      var newNode = list.insertAfter(firstNode, 'new');

      it('returns the new node', function() {
        expect(newNode.data).to.equal('new');
      });

      it('sets the new node previous node', function() {
        expect(newNode.previousNode).to.equal(firstNode);
      });

      it('sets the next node on the previous node', function() {
        expect(firstNode.nextNode).to.equal(newNode);
      });

      it('sets the new node next node to the last node', function() {
        expect(newNode.nextNode).to.equal(secondNode);
      });

      it('sets the list size', function() {
        expect(list.size).to.equal(3);
      });
    });
  });

  describe('#insertBefore', function() {
    context('when the node is the first node in the list', function() {
      var list = new List();
      var firstNode = list.insertBeginning('first');
      var newNode = list.insertBefore(firstNode, 'second');

      it('returns the new node', function() {
        expect(newNode.data).to.equal('second');
      });

      it('sets the new node next node', function() {
        expect(newNode.nextNode).to.equal(firstNode);
      });

      it('sets the previous node on the next node', function() {
        expect(firstNode.previousNode).to.equal(newNode);
      });

      it('sets the new node previous node to null', function() {
        expect(newNode.previousNode).to.equal(null);
      });

      it('sets the list size', function() {
        expect(list.size).to.equal(2);
      });
    });

    context('when the node is not the first node in the list', function() {
      var list = new List();
      var firstNode = list.insertBeginning('first');
      var secondNode = list.insertAfter(firstNode, 'second');
      var newNode = list.insertBefore(secondNode, 'new');

      it('returns the new node', function() {
        expect(newNode.data).to.equal('new');
      });

      it('sets the new node next node', function() {
        expect(newNode.nextNode).to.equal(secondNode);
      });

      it('sets the previous node on the next node', function() {
        expect(secondNode.previousNode).to.equal(newNode);
      });

      it('sets the new node previous node to the first node', function() {
        expect(newNode.previousNode).to.equal(firstNode);
      });

      it('sets the list size', function() {
        expect(list.size).to.equal(3);
      });
    });
  });

  describe('#insertBeginning', function() {
    context('when the data is the first in the list', function() {
      before(function() {
        this.list = new List();
        this.node = this.list.insertBeginning('first');
      });

      Examples.itInsertsTheNodeAtTheBeginningOfTheList();
    });

    context('when the data is not the first node in the list', function() {
      before(function() {
        this.list = new List();
        this.lastNode = this.list.insertEnd('last');
        this.node = this.list.insertBeginning('first');
      });

      Examples.itInsertsTheNodeAtTheBeginningOfTheList();

      it('sets the list last node to the last node', function() {
        expect(this.list.lastNode).to.equal(this.lastNode);
      });

      it('sets the node data next node to the last node', function() {
        expect(this.node.nextNode).to.equal(this.lastNode);
      });

      it('sets the size of the list to 2', function() {
        expect(this.list.size).to.equal(2);
      });
    });
  });

  describe('#insertEnd', function() {
    context('when the data is the first in the list', function() {
      before(function() {
        this.list = new List();
        this.node = this.list.insertEnd('first');
      });

      Examples.itInsertsTheNodeAtTheBeginningOfTheList();

      it('sets the last node to the data node', function() {
        expect(this.list.lastNode).to.equal(this.node);
      });

      it('sets the node data next node to null', function() {
        expect(this.node.nextNode).to.equal(null);
      });

      it('sets the size of the list to 1', function() {
        expect(this.list.size).to.equal(1);
      });
    });

    context('when the data is not the first in the list', function() {
      var list = new List();
      var firstNode = list.insertEnd('first');
      var secondNode = list.insertEnd('second');

      it('returns the node', function() {
        expect(secondNode.data).to.equal('second');
      });

      it('sets the first node to the first data node', function() {
        expect(list.firstNode).to.equal(firstNode);
      });

      it('sets the last node to the second data node', function() {
        expect(list.lastNode).to.equal(secondNode);
      });

      it('sets the second node data previous node to the first node', function() {
        expect(secondNode.previousNode).to.equal(firstNode);
      });

      it('sets the second node data next node to null', function() {
        expect(secondNode.nextNode).to.equal(null);
      });

      it('sets the first node data previous node to null', function() {
        expect(firstNode.previousNode).to.equal(null);
      });

      it('sets the first node data next node to the second node', function() {
        expect(firstNode.nextNode).to.equal(secondNode);
      });

      it('sets the size of the list to 2', function() {
        expect(list.size).to.equal(2);
      });
    });
  });

  describe('#remove', function() {
    context('when the node is the only node in the list', function() {
      before(function() {
        this.list = new List();
        this.node = this.list.insertEnd('first');
        this.list.remove(this.node);
      });

      Examples.itRemovesTheNodeFromTheList();

      it('sets the first node to null', function() {
        expect(this.list.firstNode).to.equal(null);
      });

      it('sets the last node to null', function() {
        expect(this.list.lastNode).to.equal(null);
      });

      it('reduces the size', function() {
        expect(this.list.size).to.equal(0);
      });
    });

    context('when the node is not the only node in the list', function() {
      context('when the node is the first node', function() {
        before(function() {
          this.list = new List();
          this.node = this.list.insertBeginning('first');
          this.lastNode = this.list.insertEnd('last');
          this.list.remove(this.node);
        });

        Examples.itRemovesTheNodeFromTheList();

        it('sets the first node to the last node', function() {
          expect(this.list.firstNode).to.equal(this.lastNode);
        });

        it('sets the last node previous node to null', function() {
          expect(this.lastNode.previousNode).to.equal(null);
        });

        it('reduces the size', function() {
          expect(this.list.size).to.equal(1);
        });
      });

      context('when the node is the last node', function() {
        before(function() {
          this.list = new List();
          this.lastNode = this.list.insertEnd('last');
          this.node = this.list.insertEnd('first');
          this.list.remove(this.node);
        });

        Examples.itRemovesTheNodeFromTheList();

        it('sets the first node to the last node', function() {
          expect(this.list.firstNode).to.equal(this.lastNode);
        });

        it('sets the last node previous node to null', function() {
          expect(this.lastNode.previousNode).to.equal(null);
        });

        it('sets the last node next node to null', function() {
          expect(this.lastNode.nextNode).to.equal(null);
        });

        it('reduces the size', function() {
          expect(this.list.size).to.equal(1);
        });
      });

      context('when the node is in the middle', function() {
        before(function() {
          this.list = new List();
          this.firstNode = this.list.insertEnd('first');
          this.node = this.list.insertAfter(this.firstNode, 'middle');
          this.lastNode = this.list.insertEnd('last');
          this.list.remove(this.node);
        });

        Examples.itRemovesTheNodeFromTheList();

        it('sets the first node next node to the last node', function() {
          expect(this.firstNode.nextNode).to.equal(this.lastNode);
        });

        it('sets the last node previous node to the first node', function() {
          expect(this.lastNode.previousNode).to.equal(this.firstNode);
        });

        it('reduces the size', function() {
          expect(this.list.size).to.equal(2);
        });
      });
    });
  });
});
