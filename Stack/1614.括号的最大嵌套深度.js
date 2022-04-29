/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let ans = 0, size = 0
  for (let i = 0; i < s.length; i++) {
    const n = s[i]
    if (n === '(') {
      size++
      ans = Math.max(ans, size)
    } else if (n === ')') {
      size--
    }
  }
  return ans
};