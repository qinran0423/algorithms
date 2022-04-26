/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// '23'
var letterCombinations = function (digits) {
  let len = digits.length
  let arr = [
    '', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
  ]
  // 如果长度为0 直接返回空数组
  if (len === 0) return []
  if (len === 1) {
    // 如果长度为1 把对应的按键切割成数组直接返回
    return arr[digits].split('')
  }

  let res = []
  let path = []
  backTrack(digits, len, 0)
  return res
  function backTrack(digits, l, index) {
    // 终止条件
    if (path.length === l) {
      return res.push(path.join(''))
    }
    // 1. 'abc'
    //  path ['a']
    // 2 'def' 
    // path ['ad']
    for (let i = 0; i < arr[digits[index]].length; i++) {
      path.push(arr[digits[index]][i])
      backTrack(digits, l, index + 1)
      path.pop()
    }
  }
};
// @lc code=end

