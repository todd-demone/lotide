const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns true when comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when comparing [1, 2, 3], [1, 2, '3']", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
  });
  it("returns true when comparing [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]], [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4, [1, 2, [3, 4, 5, 6]]]], [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]), true);
  });
  it("returns false when comparing [[2, 3], [4, [1, 2, [3, 5, 5, 6]]]], [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4, [1, 2, [3, 5, 5, 6]]]], [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]), false);
  });
  it("returns false when comparing [1, 2, 3] and [1, 2]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
});