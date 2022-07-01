/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  for (const ch of s) {
    if (map.has(ch)) {
      if (stack[stack.length - 1] !== map.get(ch) || !stack.length) {
        return false
      }
      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  return !stack.length
};
// @lc code=end

