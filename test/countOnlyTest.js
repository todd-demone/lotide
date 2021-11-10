const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("the return object has the key:value pairs 'Jason':1 and 'Fang: 2", () => {
    assert.deepEqual(
      countOnly(
        [
          "Karl",
          "Salima",
          "Agouhanna",
          "Fang",
          "Kavith",
          "Jason",
          "Salima",
          "Fang",
          "Joe"
        ],
        {
          "Jason": true,
          "Karima": true,
          "Fang": true,
          "Agouhanna": false
        }
      ),
      {
        'Jason': 1,
        'Fang': 2
      });
  });
});