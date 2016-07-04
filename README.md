# hadron-linked-list [![][travis_img]][travis_url] [![][npm_img]][npm_url]

Hadron Linked List is a set of linked list implementations in Javascript.

## Installation

```
npm install --save hadron-linked-list
```

## Usage

```javascript
'use strict';

const DoublyLinkedList = require('hadron-linked-list').DoublyLinkedList;

var list = new DoublyLinkedList();
list.insertEnd('first');
list.insertEnd('second');
list.insertEnd('third');

for (let value of list) {
  console.log(value);
}
```

## License

Apache 2.0

[travis_img]: https://img.shields.io/travis/mongodb-js/hadron-linked-list.svg?style=flat-square
[travis_url]: https://travis-ci.org/mongodb-js/hadron-linked-list
[npm_img]: https://img.shields.io/npm/v/hadron-linked-list.svg?style=flat-square
[npm_url]: https://www.npmjs.org/package/hadron-linked-list
