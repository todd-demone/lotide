const eqArrays = require('./eqArrays');

/**
 * Compares two objects to determine if they are equivalent.
 * @param {Object} object1 The object to compare.
 * @param {Object} object2 The other object to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!(eqArrays(val1, val2))) {
        return false;
      }
    } else if ((Object.prototype.toString.call(val1) === '[object Object]') && (Object.prototype.toString.call(val2) === '[object Object]')) {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;