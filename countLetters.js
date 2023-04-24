const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};
  for (const characters of sentence) {
    if (characters !== ' ') {
      if (letterCount[characters]) {
        letterCount[characters]++;
      } else {
        letterCount[characters] = 1;
      }
    }
  }
  return letterCount;
};

const testCase1 = "hello";
const result1 = countLetters(testCase1);
assertEqual(result1["h"], 1);
assertEqual(result1["e"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["o"], 1);

