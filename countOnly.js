// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function countOnly()
// arguments: (1) Array of strings, (2) Object indicating which array items to count (true or false values)
// return value: Object, with array things as object key and count (Number) as object value
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  // loop through the input array
  for (const item of allItems) {
    // only count an item if it's set to true in our itemsToCount object
    if (itemsToCount[item]) {
      // if the item already exists as a key in the `results` return object, then increment by 1
      if (results[item]) {
        results[item]++;
      // if the item doesn't yet exist as a key in `results`, then create a key and initialize with 1
      } else {
        results[item] = 1;
      }
    }
  }
  
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames,  {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(countOnly(['a', 'a', 'b', 'c', 'd', 'e', 'a'], {a: true, d: true, b: false, f: true}));
assertEqual(result1['Jason'], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1['Agouhanna'], undefined);