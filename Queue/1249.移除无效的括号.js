/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const n = s.length,
    leftStack = [],
    rightStack = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      leftStack.push(i);
    } else if (s[i] === ")") {
      if (leftStack.length) {
        leftStack.pop();
      } else {
        rightStack.push(i);
      }
    }
  }

  let res = [...s],
    filters = leftStack.concat(rightStack);
  for (let i = 0; i < filters.length; i++) {
    res[filters[i]] = "";
  }

  return res.join("");
};
// @lc code=end
