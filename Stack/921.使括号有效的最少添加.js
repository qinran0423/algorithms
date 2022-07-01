/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let need = 0
  let ret = 0
  for (const ch of s) {
    if (ch === '(') {
      need++
    } else if (ch === ')') {
      need--

      if (need < 0) {
        need = 0
        ret++
      }
    }
  }

  return ret + need
};
// @lc code=end
