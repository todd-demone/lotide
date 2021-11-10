const assert = require('chai').assert;
const flatten = require('../flatten');

assertArraysEqual(flatten([1, 2, 3, [4, 5], 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([['moose', 'elk', 'deer', 'bear'], 'cat', 'dog', ['mouse', 'rat'], 'elephant', ['goat', 'dog']]), ['moose', 'elk', 'deer', 'bear', 'cat', 'dog', 'mouse', 'rat', 'elephant', 'goat', 'dog']);
assertArraysEqual(flatten([[], 2, 3]), [2, 3]);