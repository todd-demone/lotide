const assert = require('chai').assert;
const countLetters = require('../countLetters');

const result1 = countLetters('this is a test');
describe('#countLetters', () => {
  describe("run function on string 'this is a test'", () => {
    it("the return object has the following key:value pair: t: 3", () => {
      assert.strictEqual(result1['t'], 3);
    });
    it("the return object has the following key:value pair: a: 1", () => {
      assert.strictEqual(result1['a'], 1);
    });
    it("the return object does not contain the key 'z'", () => {
      assert.strictEqual(result1['z'], undefined);
    });
    it("the return object does not contain the key ' '", () => {
      assert.strictEqual(result1[' '], undefined);
    });
  });
});