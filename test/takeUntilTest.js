const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [
  {
    firstName: 'Bart',
    isGood: false
  },
  {
    firstName: 'Homer',
    isGood: false
  },
  {
    firstName: 'Mo',
    isGood: false
  },
  {
    firstName: 'Ned',
    isGood: true
  },
  {
    firstName: 'Marg',
    isGood: true
  }
];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
// assertArraysEqual(takeUntil(data3, x => x.isGood), [{
//   firstName: 'Bart',
//   isGood: false
// },
// {
//   firstName: 'Homer',
//   isGood: false
// },
// {
//   firstName: 'Mo',
//   isGood: false
// }]);
// assertArraysEqual();
