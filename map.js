const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

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

// const words = ['north', 'south', 'east', 'west'];

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map([2, 3, 4], x => x ** 2), [4, 9 , 16]);
assertArraysEqual(map(['cat', 'dog', 'mouse'], x => x.toUpperCase()), ['CAT', 'DOG', 'MOUSE']);
assertArraysEqual(map(['island', 'volcano', 'mountain'], x => x.length), [6, 7, 8]);
assertArraysEqual(map([true, false, true], x => !x), [false, true, false]);
