const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(x) {
  return x.slice(1);
};

let arr = [0, 2, 3];
let expected = [2, 3];
let actual = tail(arr);

assertEqual(actual, expected);
console.log(actual);gi