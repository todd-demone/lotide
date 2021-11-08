const tail = require('../tail');
const assertEqual = require('../assertEqual');

// assertEqual(tail([1, 2, 3]).join(', '), '2, 3');
// assertEqual(tail(['this', 'is', 'a', 'test']).join(' '), 'is a test');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

const result2 = tail(['this', 'is', 'a', 'test']);
assertEqual(result2.length, 3);
assertEqual(result2[0], 'is');
assertEqual(result2[1], 'a');
assertEqual(result2[2], 'test');

const result3 = tail(['lonely element']);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined);

const result4 = tail([]);
assertEqual(result4.length, 0);
assertEqual(result4[0], undefined);

