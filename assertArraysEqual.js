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
    console.log(`✅️ Assertion Passed: ${actualStr} === ${expectedStr}`);
  // else, print a fail message
  } else {
    console.log(`🛑️ Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // pass
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // fail