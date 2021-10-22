// without.js

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without(['Bill', 'Jaime', 'Luis', 'Sally'], ['Bill', 42, true]), ['Jaime', 'Luis', 'Sally']);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1, 2, 3]), []);

// Testing to make sure the original array is not modified
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
// make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);