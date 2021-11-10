// FXN without
// Arguments *** Array to inspect (source), Array of values to remove (itemsToRemove)
// Returns *** A new Array with only those items that were missing from
//             itemsToRemove
const without = function(source, itemsToRemove) {
  // The Array.filter() Fxn will return a new array with only those elements
  // that cause the inline callback function's boolean comparison
  // to return true.
  // In this case, if the element is missing from the itemsToRemove array then
  // the callback function returns true, and the element is added to
  // the new (returned) array.
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