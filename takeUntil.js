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

// FXN eqArrays
// input => Array, Array
// output => Boolean
const eqArrays = function(arr1, arr2) {
  // arrays are not identical if they have different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }
  // compare each item in arr1 to the corresponding item in arr2
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // if all items are equal, return true
  return true;
};

// FXN assertArraysEqual
// input => Array, Array
// output => no return value; side effect (console.log())
const assertArraysEqual = function(actual, expected) {
  // Stringify the arrays so they look like arrays when printed to console.
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  // compare actual and expected (both are arrays) to see if equal
  // if result is true, print a pass message
  if (eqArrays(actual, expected)) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actualStr} === ${expectedStr}`);
  // else, print a fail message
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};


// TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [
  {
    firstName: 'Bart',
    isGood: false
  },
  {
    firstName: 'Homer',
    isGood: false
  },
  {
    firstName: 'Mo',
    isGood: false
  },
  {
    firstName: 'Ned',
    isGood: true
  },
  {
    firstName: 'Marg',
    isGood: true
  }
];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
// assertArraysEqual(takeUntil(data3, x => x.isGood), [{
//   firstName: 'Bart',
//   isGood: false
// },
// {
//   firstName: 'Homer',
//   isGood: false
// },
// {
//   firstName: 'Mo',
//   isGood: false
// }]);
// assertArraysEqual();

