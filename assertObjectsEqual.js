const eqObjects = require('./eqObjects');

/**
 * Asserts equality of two objects, `actual` and `expected`.
 * @param {Object} actual The object to compare.
 * @param {Object} expected The other object to compare.
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
