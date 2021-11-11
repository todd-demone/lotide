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

* `_.assertArraysEqual(actual, expected)`: Asserts equality of two arrays, `actual` and `expected`.
* `_.assertEqual(actual, expected)`: Asserts strict equality ( === ) of `actual` and `expected`, both of which are primitive values.
* `_.assertObjectsEqual(actual, expected)`: Asserts equality of two objects, `actual` and `expected`.
* `_.countLetters(sentence)`: Counts the number of times each letter in `sentence` occurs.
* `_.countOnly(allItems, itemsToCount)`: Searches an array for specified items and returns a count of those items.
* `_.eqArrays(array1, array2)`: Compares two arrays to determine if they are equivalent. 
* `_.eqObjects(object1, object2)`: Compares two objects to determine if they are equivalent.
* `_.findKey(object, callback)`: Iterates over an object and returns the first key for which the callback returns a truthy value. 
* `_.findKeyByValue(object, value)`: Scans an object and returns the first key which contains the given value.
* `_.flatten(array)`: Flattens an array a single level deep.
* `_.head(array)`: Gets the first element of an array.
* `_.letterPositions(sentence)`: Scans a sentence to find the index(indices) of each character in the sentence.
* `_.map(array, callback)`: Creates a new array containing the results of calling a callback function on every element in the array.
* `_.middle(array)`: Gets the middle element(s) of an array.
* `_.tail(array)`: Gets all but the first element of an array.
* `_.takeUntil(array, callback)`: Returns a slice of an array, starting at the beginning of the array and ending when the applied function returns a truthy value.
* `_.without(source, itemsToRemove)`: Picks out items from an array, except for items that are specified in the list of `itemsToRemove`.