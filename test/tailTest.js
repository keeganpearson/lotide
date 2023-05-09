const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] when input is [0, 2, 3]", () => {
    let arr = [0, 2, 3];
    let expected = [2, 3];
    let actual = tail(arr);
    assert.deepEqual(actual, expected);
  });
});