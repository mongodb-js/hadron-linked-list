'use strict';

const chai = require('chai');
const expect = chai.expect;

function itInsertsTheNodeAtTheBeginningOfTheList() {
  it('returns the node', function() {
    expect(this.node.data).to.equal('first');
  });

  it('sets the first node to the data node', function() {
    expect(this.list.firstNode).to.equal(this.node);
  });

  it('sets the node data previous node to null', function() {
    expect(this.node.previousNode).to.equal(null);
  });
}

function itRemovesTheNodeFromTheList() {
  it('sets the previous node to null', function() {
    expect(this.node.previousNode).to.equal(null);
  });

  it('sets the next node to null', function() {
    expect(this.node.nextNode).to.equal(null);
  });
}

module.exports.itInsertsTheNodeAtTheBeginningOfTheList = itInsertsTheNodeAtTheBeginningOfTheList;
module.exports.itRemovesTheNodeFromTheList = itRemovesTheNodeFromTheList;
