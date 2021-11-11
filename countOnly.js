/**
 * Searches an array for specified items; returns a count of those items.
 * @param {Array} allItems The array to inspect.
 * @param {object} itemsToCount The items to find.
 * @returns {Object} Returns the number of times each item is found in `allItems`.
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { // only count an item if it's set to true in our itemsToCount object
      if (results[item]) { // if the item already exists as a key in the `results` return object, then increment by 1
        results[item]++;
      } else { // if the item doesn't yet exist as a key in `results`, then create a key and initialize with 1
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;