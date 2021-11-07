const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) { // recursive call
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // if all items are equal, return true
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

assertEqual(
  eqArrays(
    [[2, 3], [4]], 
    [[2, 3], [4]]
  ), 
  true
);

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [[2, 3], [4, 5]]
  ),
  false
);

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [[2, 3], 4],
  ),
  false
);

assertEqual(
  eqArrays(
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]], 
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]
  ), 
  true
);

assertEqual(
  eqArrays(
    [[2, 3], [4, [1, 2, [3, 5, 5, 6]]]], 
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]
  ), 
  false
);