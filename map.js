/**
 * Creates a new array containing the results of calling a callback function on every element in the array.
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;