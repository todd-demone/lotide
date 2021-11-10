const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

const result1 = countLetters('this is a test');
assertEqual(result1["t"], 3);
assertEqual(result1['a'], 1);
assertEqual(result1['z'], undefined);
assertEqual(result1[' '], undefined);

// {t: 3, h: 1, i: 2, s: 3, a: 1, e: 1}