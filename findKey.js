// findKey.js
// scan an object and return first key for which callback returns a truthy value
// Argument(s): Object, (callback) Function
// Returns: String aka key from the input Object
const findKey = function(obj, callback) {
  // create an array of keys
  const keys = Object.keys(obj);
  // console.log(keys);
  // loop through the keys
  for (const key of keys) {
    // apply callback to object property
    const isTrue = callback(obj[key]);
    // if isTrue, return key
    if (isTrue) {
      return key;
    }
  }
};

// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TESTS
const things = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(things, x => x.stars === 2), 'noma');

const users = {
  'barney':  {
    'age': 36, 'active': true
  },
  'fred':    {
    'age': 40, 'active': false
  },
  'pebbles': {
    'age': 1,  'active': true
  }
};
 
assertEqual(findKey(users, o => o.age < 40), 'barney');

const simpsons = {
  bart: {
    firstName: 'Bart',
    isGood: false
  },
  homer: {
    firstName: 'Homer',
    isGood: false
  },
  mo: {
    firstName: 'Mo',
    isGood: false
  },
  ned: {
    firstName: 'Ned',
    isGood: true
  },
  marg: {
    firstName: 'Marg',
    isGood: true
  }
};
assertEqual(findKey(simpsons, x => x.firstName === 'Lisa'), undefined);
assertEqual(findKey(simpsons, x => x.isGood), 'ned');