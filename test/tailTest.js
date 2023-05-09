const assertEqual = require('../assertEqual');
const tail = require('../tail');

let arr = [0, 2, 3];
let expected = [2, 3];
let actual = tail(arr);

assertEqual(actual, expected);
console.log(actual);