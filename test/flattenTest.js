const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("return [1, 2, 3, 4, 5, 6] from [1, 2, 3, [4, 5], 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, [4, 5], 6]), [1, 2, 3, 4, 5, 6]);
  });
  it("return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("return [['moose', 'elk', 'deer', 'bear'], 'cat', 'dog', ['mouse', 'rat'], 'elephant', ['goat', 'dog']] from ['moose', 'elk', 'deer', 'bear', 'cat', 'dog', 'mouse', 'rat', 'elephant', 'goat', 'dog']", () => {
    assert.deepEqual(flatten([['moose', 'elk', 'deer', 'bear'], 'cat', 'dog', ['mouse', 'rat'], 'elephant', ['goat', 'dog']]), ['moose', 'elk', 'deer', 'bear', 'cat', 'dog', 'mouse', 'rat', 'elephant', 'goat', 'dog']);
  });
  it("return [2, 3] from [[], 2, 3]", () => {
    assert.deepEqual(flatten([[], 2, 3]), [2, 3]);
  });
});