// Array, Array => Boolean
const eqArrays = function(array1, array2) {
  // arrays are not identical if they have different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  // compare each item in arr1 to the corresponding item in arr2
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) { // recursive call
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // if all items are equal, return true
  return true;
};

module.exports = eqArrays;