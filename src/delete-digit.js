const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split("");
  let arr = [];

  for (let i = 0; i < str.length; i += 1) {
    let count = Number((str.slice(0, i).concat(str.slice(i + 1))).join(""));
    arr.push(count);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
