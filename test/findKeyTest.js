const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  const things = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns 'noma' for callback x => x.stars === 2", () => {
    assert.strictEqual(findKey(things, x => x.stars === 2), 'noma');
  });
  const users = {
    'barney':  {
      'age': 36, 'active': true
    },
    'fred':    {
      'age': 40, 'active': false
    },
    'pebbles': {
      'age': 1,  'active': true
    }
  };
  it("returns 'barney' for callback x => x.age < 40", () => {
    assert.strictEqual(findKey(users, x => x.age < 40), 'barney');
  });
  const simpsons = {
    bart: {
      firstName: 'Bart',
      isGood: false
    },
    homer: {
      firstName: 'Homer',
      isGood: false
    },
    mo: {
      firstName: 'Mo',
      isGood: false
    },
    ned: {
      firstName: 'Ned',
      isGood: true
    },
    marg: {
      firstName: 'Marg',
      isGood: true
    }
  };
  it("returns 'ned' for callback x => x.isGood", () => {
    assert.strictEqual(findKey(simpsons, x => x.isGood), 'ned');
  });
});