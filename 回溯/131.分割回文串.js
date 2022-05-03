/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s, l, r) {
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

var partition = function (s) {
  let ret = []
  let path = []
  backTrack(0)

  return ret

  function backTrack(k) {
    if (k >= s.length) {
      return ret.push([...path])
    }

    for (let i = k; i < s.length; i++) {
      if (!isPalindrome(s, k, i)) {
        continue
      }
      path.push(s.substr(k, i - k + 1))
      backTrack(i + 1)
      path.pop()

    }
  }

};
// @lc code=end

