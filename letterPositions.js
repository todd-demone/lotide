/**
 * Scans a sentence to find the index(indices) of each character in the sentence.
 * @param {string} sentence The sentence to scan.
 * @returns {Object} Returns an object of arrays, with each array containing the index(indices) of each character in the sentence.
 */
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;