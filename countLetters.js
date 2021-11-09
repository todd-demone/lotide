// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  // get rid of spaces
  sentence = sentence.split(' ').join('');
  // initialize the return object
  let count = {};
  // loop through the characters of the sentence
  for (const char of sentence) {
    // if the character is already represented as a key in the return object,
    // then increment the key's value by 1
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

module.exports = countLetters;

const result1 = countLetters('this is a test');
assertEqual(result1["t"], 3);
assertEqual(result1['a'], 1);
assertEqual(result1['z'], undefined);
assertEqual(result1[' '], undefined);

// {t: 3, h: 1, i: 2, s: 3, a: 1, e: 1}