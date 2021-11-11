/**
 * Iterates over an object and returns the first key for which the callback returns a truthy value.
 * @param {Object} object The object being iterated over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {*} Returns a key if `callback` returns `true`, else `undefined`.
 */
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    const isTrue = callback(object[key]);
    if (isTrue) {
      return key;
    }
  }
};

module.exports = findKey;