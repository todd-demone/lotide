// flatten.js

const flatten = function(arr) {
  // create a new array to be returned
  const newArr = [];
  // check each item in the array
  for (const item of arr) {
    // if the item is an array, loop through the array and add each item to newArr
    if (Array.isArray(item)) {
      for (const subitem of item) {
        newArr.push(subitem);
      }
    // otherwise, just add the item to newArr
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = flatten;