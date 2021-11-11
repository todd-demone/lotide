const eqArrays = require('./eqArrays');

/**
 * Asserts equality of two arrays, `actual` and `expected`.
 * @param {Array} actual The array to compare.
 * @param {Array} expected The other array to compare
 */
const assertArraysEqual = function(actual, expected) {
  // Stringify the arrays so they look like arrays when printed to console.
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (eqArrays(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};

module.exports = assertArraysEqual;