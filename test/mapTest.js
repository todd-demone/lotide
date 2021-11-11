const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns [4, 9 , 16] from map([2, 3, 4], x => x ** 2)", () => {
    assert.deepEqual(map([2, 3, 4], x => x ** 2), [4, 9 , 16]);
  });
  it("returns ['CAT', 'DOG', 'MOUSE'] from map(['cat', 'dog', 'mouse'], x => x.toUpperCase())", () => {
    assert.deepEqual(map(['cat', 'dog', 'mouse'], x => x.toUpperCase()), ['CAT', 'DOG', 'MOUSE']);
  });
  it("returns [6, 7, 8] from map(['island', 'volcano', 'mountain'], x => x.length)", () => {
    assert.deepEqual(map(['island', 'volcano', 'mountain'], x => x.length), [6, 7, 8]);
  });
  it("returns [false, true, false] from map([true, false, true], x => !x)", () => {
    assert.deepEqual(map([true, false, true], x => !x), [false, true, false]);
  });
});