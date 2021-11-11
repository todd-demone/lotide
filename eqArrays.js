/**
 * Compares two arrays to determine if they are equivalent.
 * @param {Array} array1 The array to compare.
 * @param {Array} array2 The other array to compare.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;