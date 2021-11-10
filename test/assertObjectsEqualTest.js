const assertObjectsEqual = require('../assertObjectsEqual');

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