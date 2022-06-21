/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  let arr = new Array(26).fill(0)
  let base = 'a'.charCodeAt()
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - base] += 1
    arr[t[i].charCodeAt() - base] -= 1
  }

  return arr.every(i => i === 0)
};
// @lc code=end

