# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @todd-demone/lotide`

**Require it:**

`const _ = require('@todd-demone/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.assertArraysEqual(actual, expected)`: asserts equality of two arrays, `actual` and `expected`
* `_.assertEqual(actual, expected)`: asserts strict equality ( === ) of `actual` and `expected`, both of which are primitive values
* `_.assertObjectsEqual(actual, expected)`: asserts equality of two objects, `actual` and `expected`
* `_.countLetters(sentence)`: returns an object containing a count of each of the letters in `sentence` (String)
* `_.countOnly(allItems, itemsToCount)`: inspects `allItems` (Array) and returns an object containing counts of everything listed in `itemsToCount` (Object).
* `_.eqArrays(array1, array2)`: compares two arrays `array1` and `array2` and returns `true` or `false` based on a perfect match 
* `_.eqObjects(object1, object2)`: compares two objects `object1` and `object2` and returns `true` or `false` based on a perfect match
* `_.findKey(object, callback)`: scans `object` and returns the first key for which `callback` returns a truthy value 
* `_.findKeyByValue(object, value)`: scans `object` and returns the first key which contains the given `value`
* `_.flatten(array)`: flattens `array` a single level deep
* `_.head(array)`: gets the first element of `array`
* `_.letterPositions(sentence)`: returns an object that contains one array per character found in `sentence` (String). The array contains all the indices in `sentence` where the character is found.
* `_.map(array, callback)`: creates a new array containing the results of calling `callback` (Function) on every element in `array`
* `_.middle(array)`: returns a new array with only the middle element(s) of the provided `array`
* `_.tail(array)`: returns an array with all but the first element of the provided `array`
* `_.takeUntil(array, callback)`: returns a slice of `array` with elements taken from the beginning. `callback` (Function) is called on each element in the array, starting at the beginning. Elements are taken until `callback` returns a truthy value
* `_.without(source, itemsToRemove)`: inspects `source` (Array) and creates a new array excluding the items listed in `itemsToRemove` (Array)