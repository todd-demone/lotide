const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(map([2, 3, 4], x => x ** 2), [4, 9 , 16]);
assertArraysEqual(map(['cat', 'dog', 'mouse'], x => x.toUpperCase()), ['CAT', 'DOG', 'MOUSE']);
assertArraysEqual(map(['island', 'volcano', 'mountain'], x => x.length), [6, 7, 8]);
assertArraysEqual(map([true, false, true], x => !x), [false, true, false]);
