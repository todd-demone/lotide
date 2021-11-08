const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TESTS
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['foo', 'bar', 'baz', 'bongo']), ['bar', 'baz']);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(['cat', 32, {}]), [32]);
assertArraysEqual(middle(['foo', 'bar', 'baz', 'bongo']), ['bar', 'baz']);
assertArraysEqual(middle([null, 'cat', false, 42, 'star wars']), [false]);
assertArraysEqual(middle([false]), []);
assertArraysEqual(middle(42), false);