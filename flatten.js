/**
 * Flattens an array a single level deep.
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
const flatten = function(array) {
  const newArray = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const subitem of item) {
        newArray.push(subitem);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = flatten;