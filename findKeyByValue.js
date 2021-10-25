// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// findKeyByValue()
// argument(s):     Object, value
// return(s):       the key corresponding to the input value in the input object, or undefined is there is no key
const findKeyByValue = function(object, value) {
  // create an array of the keys in the object
  const keys = Object.keys(object);
  // loop through the array of keys to find if the key matches the given value
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);