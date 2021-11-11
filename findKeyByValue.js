/**
 * Scans an object and returns the first key which contains the given value.
 * @param {Object} object The object being scanned.
 * @param {*} value The value to search for.
 * @returns {*} Returns the key corresponding to `value` in `object`, else `undefined`.
 */
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;