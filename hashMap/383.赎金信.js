/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }
  let base = 'a'.charCodeAt(0)
  let arr = new Array(26).fill(0)
  for (const m of magazine) {
    arr[m.charCodeAt() - base]++
  }
  for (const r of ransomNote) {
    arr[r.charCodeAt() - base]--
  }

  return arr.every(i => i >= 0)


};
var canConstruct1 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }
  let obj = {}
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in obj) {
      obj[magazine[i]] += 1
    } else {
      obj[magazine[i]] = 1
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNote[i] in obj) {
      obj[ransomNote[i]] -= 1
      if (obj[ransomNote[i]] < 0) {
        return false
      }
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

