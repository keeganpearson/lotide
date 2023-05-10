# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @keeganpearson/lotide`

**Require it:**

`const _ = require('@keeganpearson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head` : returns first element in array
* `tail` : returns last element in array
* `middle` : returns middle or averaged middle 
* `assertArraysEqual` : checks if arrays are equal
* `assertEqual` : checks if things are equal
* `assertObjectsEqual` : checks if objects equal
* `countLetters` : counts number of letters in string
* `countOnly` : counts only what we want
* `eqArrays` : checks arrays are equal or returns false
* `eqObjects` : checks objects are equal
* `findKey` : returns first true key in object 
* `findKeyByValue` : returns first key in object that matches value
* `flatten` : concatates nested arrays into one array
* `letterPositions` : returns index position of each letter (exludes spaces)
* `map` : returns new array with each original element transformed by the callback function
* `takeUntil` : returns new array until first truthy value, then stops
* `without` : returns new array, containing all elements from source that are not in itemsToRemove array