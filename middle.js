// middle
// argument(s) = Array
// return value = Array with only middle-most element(s) of input array
const middle = function(arr) {
  // a good starting point for calculating where to slice the array
  const mid = arr.length / 2;
  let startingIndex, endingIndex;
  if (!Array.isArray(arr)) {
    console.log(`The middle function received a ${typeof arr} type rather than an array.`)
    return false;
  }
  // if array.length equals 1 or 2 ====> return empty array
  if (arr.length <= 2) {
    return [];
  }
  
  // if array.length is even ====> grab the two middle items
  if (arr.length % 2 === 0) {
    startingIndex = mid - 1;
    endingIndex = mid + 1;
  // if array length is odd ====> grab the middle item
  } else {
    startingIndex = Math.floor(mid);
    endingIndex = Math.ceil(mid);
  }

  return arr.slice(startingIndex, endingIndex);
};


// TESTING FUNCTIONS
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

//TESTS
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['foo', 'bar', 'baz', 'bongo']), ['bar', 'baz']);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(['cat', 32, {}]), [32]);
assertArraysEqual(middle(['foo', 'bar', 'baz', 'bongo']), ['bar', 'baz']);
assertArraysEqual(middle([null, 'cat', false, 42, 'star wars']), [false]);
assertArraysEqual(middle([false]), []);
assertArraysEqual(middle(42), false);

