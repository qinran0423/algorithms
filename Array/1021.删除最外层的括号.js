/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let res = ''
  let t = 0
  for (const ch of s) {
    if (ch === '(' && t++ > 0) {
      res += ch
    }

    if (ch === ')' && t-- > 1) {
      res += ch
    }
  }

  return res
};
// @lc code=end

