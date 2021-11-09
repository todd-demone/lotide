// Array => Array with only middle-most element(s) of input array
const middle = function(arr) {
  // a good starting point for calculating where to slice the array
  const mid = arr.length / 2;
  let startingIndex, endingIndex;
  
  if (!Array.isArray(arr)) {
    console.log(`The middle function received a ${typeof arr} type rather than an array.`);
    return false;
  }

  // if array.length equals 1 or 2 ====> return empty array
  if (arr.length <= 2) {
    return [];
  }
  
  // if array.length is even ====> grab the two middle items
  if (arr.length % 2 === 0) {
    startingIndex = mid - 1;
    endingIndex = mid + 1;
  // if array length is odd ====> grab the middle item
  } else {
    startingIndex = Math.floor(mid);
    endingIndex = Math.ceil(mid);
  }

  return arr.slice(startingIndex, endingIndex);
};

module.exports = middle;