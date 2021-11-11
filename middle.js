/**
 * Gets the middle element(s) of an array.
 * @param {Array} array The array to query.
 * @returns {Array} Returns an array containing the middle element(s) of `array`, or `false` if the input is not an array.
 */
const middle = function(array) {
  const mid = array.length / 2;
  let startingIndex, endingIndex;
  if (!Array.isArray(array)) {
    console.log(`The middle function received a ${typeof array} type rather than an array.`);
    return false;
  }
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) { // if array.length is even, grab the two middle items
    startingIndex = mid - 1;
    endingIndex = mid + 1;
  } else { // if array.length is odd, grab the middle item
    startingIndex = Math.floor(mid);
    endingIndex = Math.ceil(mid);
  }
  return array.slice(startingIndex, endingIndex);
};

module.exports = middle;