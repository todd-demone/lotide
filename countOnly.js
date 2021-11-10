// function countOnly()
// arguments: (1) Array of strings, (2) Object indicating which array items to count (true or false values)
// return value: Object, with array things as object key and count (Number) as object value
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // only count an item if it's set to true in our itemsToCount object
    if (itemsToCount[item]) {
      // if the item already exists as a key in the `results` return object, then increment by 1
      if (results[item]) {
        results[item]++;
      // if the item doesn't yet exist as a key in `results`, then create a key and initialize with 1
      } else {
        results[item] = 1;
      }
    }
  }
  
  return results;
};

module.exports = countOnly;