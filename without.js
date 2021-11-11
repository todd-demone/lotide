/**
 * Picks out items from an array, except for items that are specified in the list of `itemsToRemove`.
 * @param {Array} source The array to iterate over.
 * @param {Array} itemsToRemove The array of values to exclude.
 * @returns {Array} Returns the new array containing items from `source` that weren't in `itemsToRemove`.
 */
const without = function(source, itemsToRemove) {
  return source.filter((element) => {
    for (const itemToRemove of itemsToRemove) {
      if (element === itemToRemove) {
        return false;
      }
    }
    return true;
  });
};

module.exports = without;