
// function eqArrays
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


// Returns true if both objects have identical keys with identical values.
// Otherwise returns false.

const eqObjects = function(object1, object2) {
  // get number of keys for both objects (both Arrays)
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // compare length of two key Arrays; if different, objects aren't equal
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop through one of the keys arrays
  for (const key of keys1) {
    // compare the values held by the two objects
    // if not equal, objects aren't equal
    // if a value is an array, compare the two values with eqArrays function
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    // otherwise, if the values are not arrays, compare two values using !==
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// MAIN FUNCTION
const assertObjectsEqual = function(actual, expected) {
  // import the util library's inspect function
  const inspect = require('util').inspect; // add this to line;
  // call eqObjects with the two objects.
  // if eqObjects returns true, print a pass message
  if (eqObjects(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  // otherwise, print a fail message
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TESTS

// primitive values
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba); // pass

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc); // fail

// arrays as values
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertObjectsEqual(cd, dc); // pass

const cd2 = { c: '1', d: ['2', 3, 4] };
assertObjectsEqual(cd, cd2); // fail