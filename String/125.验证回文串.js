/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var str = s.toLowerCase();
  let left = 0
  let right = s.length - 1
  while (left <= right) {

    if (!isValid(str[left])) {
      left++
      continue
    }

    if (!isValid(str[right])) {
      right--
      continue
    }

    if (str[left] !== str[right]) {
      return false
    }

    left++
    right--
  }
  return true
};

var isValid = function (str) {
  return (str >= 'a' && str <= 'z') || (str >= '0' && str <= '9');
}
// @lc code=end

