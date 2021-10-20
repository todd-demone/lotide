const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3, 4, 5]), 1);
assertEqual(head(['tomato', 'potato', 'banana']), 'tomato');
const mishMash = [true, 42, 'chair', undefined];
assertEqual(head(mishMash), true);
assertEqual(head(mishMash), 3 > 2);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

