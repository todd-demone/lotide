/**
 * Counts the number of times each letter in `sentence` occurs.
 * @param {string} sentence The value to inspect.
 * @returns {object} Returns `count`, an object containing a count of each of the letters in `sentence`.
 */
const countLetters = function(sentence) {
  const count = {};
  sentence = sentence.split(' ').join(''); // get rid of spaces in `sentence`
  for (const char of sentence) {
    if (count[char]) { // if the character is already represented as a key in the return object, then increment the key's value by 1
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

module.exports = countLetters;