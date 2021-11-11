/**
 * Gets all but the first element of an array.
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 */
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;