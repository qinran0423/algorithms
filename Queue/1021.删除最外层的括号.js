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
  let ret = "";
  let opened = 0;
  for (const ch of s) {
    // 找到了一个左括号，opened>0
    // 说明他不是最外层的括号，需要拼接起来，然后数量加一
    if (ch === "(" && opened++ > 0) {
      ret += ch;
    }

    // 找到一个右括号， opened > 1
    // 说明他不是最外层的括号， 需要拼接起来，然后后数量减一
    if (ch === ")" && opened-- > 1) {
      ret += ch;
    }
  }

  return ret;
};
// @lc code=end
