// takeUntil.js
// return items, starting at beginning of array and ending
// when callback returns true
// Argument(s): Array, callback
// Returns: Array
const takeUntil = function(array, callback) {
  // create results array
  const results = [];
  // loop through arr
  for (const item of array) {
    // apply callback to item;
    const isTrue = callback(item);
    // if true, stop the loop and return the results array
    if (isTrue) {
      return results;
    // if false, push to results
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;