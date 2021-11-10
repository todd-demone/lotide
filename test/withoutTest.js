const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

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