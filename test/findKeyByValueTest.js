const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: 'The Wire'
};

describe('#findKeyByValue', () => {
  describe("using an object of {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    it("returns 'drama' for 'The Wire'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
    });
    it("returns undefined for 'That 70s Show'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
    });
  });
});