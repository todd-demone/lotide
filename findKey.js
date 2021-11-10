// findKey.js
// scan an object and return first key for which callback returns a truthy value
// Argument(s): Object, (callback) Function
// Returns: String aka key from the input Object
const findKey = function(object, callback) {
  // create an array of keys
  const keys = Object.keys(object);
  // console.log(keys);
  // loop through the keys
  for (const key of keys) {
    // apply callback to object property
    const isTrue = callback(object[key]);
    // if isTrue, return key
    if (isTrue) {
      return key;
    }
  }
};

module.exports = findKey;