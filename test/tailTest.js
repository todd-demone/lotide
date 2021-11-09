const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['is', 'a', 'test'] for ['this', 'is', 'a', 'test']", () => {
    assert.deepEqual(tail(['this', 'is', 'a', 'test']), ['is', 'a', 'test']);
  });
  it("returns [] for ['lonely element']", () => {
    assert.deepEqual(tail(['lonely element']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});