const assert = require('chai').assert;
const middle = require('../middle');

//TESTS
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['bar', 'baz'] for ['foo', 'bar', 'baz', 'bongo']", () => {
    assert.deepEqual(middle(['foo', 'bar', 'baz', 'bongo']), ['bar', 'baz']);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [32] for ['cat', 32, {}]", () => {
    assert.deepEqual(middle(['cat', 32, {}]), [32]);
  });
  it("returns [false] for [null, 'cat', false, 42, 'star wars']", () => {
    assert.deepEqual(middle([null, 'cat', false, 42, 'star wars']), [false]);
  });
  it("returns [] for [false]", () => {
    assert.deepEqual(middle([false]), []);
  });
  it("returns false for 42", () => {
    assert.deepEqual(middle(42), false);
  });
})