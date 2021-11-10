const countLetters = function(sentence) {
  // get rid of spaces
  sentence = sentence.split(' ').join('');
  // initialize the return object
  let count = {};
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