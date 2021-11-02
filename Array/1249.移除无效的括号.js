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
 var minRemoveToMakeValid = function(s) {
  let leftDel = [],
      rightDel = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if(ch === '(') {
      leftDel.push(i)
    } else if(ch === ')') {
      if(leftDel.length > 0) {
        leftDel.pop()
      } else {
        rightDel.push(i)
      }
    }
  }

  let res = [...s]
  let filter = leftDel.concat(rightDel)
  for (let i = 0; i < filter.length; i++) {
    res[filter[i]] = ''
  }

  return res.join('')
};
// @lc code=end

