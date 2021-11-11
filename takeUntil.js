/**
 * Returns a slice of an array, starting at the beginning of the array and ending when the applied function returns a truthy value.
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function to invoke on each iteration.
 * @returns {Array} Returns a slice of array, from beginning of `array` until `callback` returns a truthy value.
 */
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    const isTrue = callback(item);
    if (isTrue) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;