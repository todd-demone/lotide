const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] from takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] from takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ','", () => {
    assert.deepEqual(takeUntil(['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
  it("returns [{firstName: 'Bart', isGood: false}, {firstName: 'Homer', isGood: false}, {firstName: 'Mo', isGood: false}] from takeUntil([{firstName: 'Bart',isGood: false},{firstName: 'Homer',isGood: false},{firstName: 'Mo', isGood: false},{ firstName: 'Ned',isGood: true},{firstName: 'Marg',isGood: true}])", () => {
    assert.deepEqual(takeUntil([
      {firstName: 'Bart',isGood: false},{firstName: 'Homer',isGood: false},{firstName: 'Mo', isGood: false},{ firstName: 'Ned',isGood: true},{firstName: 'Marg',isGood: true}], x => x.isGood), [{firstName: 'Bart', isGood: false}, {firstName: 'Homer', isGood: false}, {firstName: 'Mo', isGood: false}]);
  });
});