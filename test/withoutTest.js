const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] from ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] from (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  it("returns ['Jaime', 'Luis', 'Sally'] from (['Bill', 'Jaime', 'Luis', 'Sally'], ['Bill', 42, true])", () => {
    assert.deepEqual(without(['Bill', 'Jaime', 'Luis', 'Sally'], ['Bill', 42, true]), ['Jaime', 'Luis', 'Sally']);
  });
  it("doesn't modify the input array", () => {
    const words = ['hello', 'world', 'lighthouse'];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ['hello', 'world', 'lighthouse']);
  });
});