const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // should log "✅✅✅ Assertion Passed: 1,2,3 === 1,2,3"
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should log "🛑🛑🛑 Assertion Failed: 1,2,3 !== 1,2,4"

