/**
 * Asserts equality of two values, `actual` and `expected`.
 * @param {*} actual The value to compare.
 * @param {*} expected The other value to compare.
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;