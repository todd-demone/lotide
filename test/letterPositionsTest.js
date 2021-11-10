const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const sentence = 'lighthouse in the house';
const result1 = letterPositions(sentence);
// console.log(result1);
assertArraysEqual(result1['h'], [3, 5, 15, 18]);
const result2 = letterPositions('hello');
// console.log(result2);
assertArraysEqual(result2['h'], [0]);
assertArraysEqual(result2['e'], [1]);
assertArraysEqual(result2['l'], [2, 3]);
assertArraysEqual(result2['o'], [4]);
