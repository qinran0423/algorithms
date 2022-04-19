/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const n = s[i]

    if (stack.length && n === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(n)
    }
  }
  return stack.join('')
};
// @lc code=end

