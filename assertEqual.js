const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual('hello', 'hello'); // pass
assertEqual('hell' + 'o', 'hello'); // pass
assertEqual(1, 1); // pass
assertEqual(2 + 2, 4); // pass
assertEqual(8 % 3, 2); // pass
assertEqual(0, 0); // pass
assertEqual(444.444, 222.222 + 222.222); // pass
console.log('--------------------');
assertEqual("Lighthouse Labs", "Bootcamp"); // fail
assertEqual('Hello', 'hello'); //fail
assertEqual('coding bootcamp', 'CODING BOOTCAMP'); // fail
assertEqual(99, -99); // fail
assertEqual(401.1, 401.05); // fail