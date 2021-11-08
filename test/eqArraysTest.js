const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

assertEqual(
  eqArrays(
    [[2, 3], [4]], 
    [[2, 3], [4]]
  ), 
  true
);

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [[2, 3], [4, 5]]
  ),
  false
);

assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [[2, 3], 4],
  ),
  false
);

assertEqual(
  eqArrays(
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]], 
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]
  ), 
  true
);

assertEqual(
  eqArrays(
    [[2, 3], [4, [1, 2, [3, 5, 5, 6]]]], 
    [[2, 3], [4, [1, 2, [3, 4, 5, 6]]]]
  ), 
  false
);