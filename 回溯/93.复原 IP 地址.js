/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ret = []
  let path = []

  backTrack(0)
  return ret

  function backTrack(i) {
    // 终止条件
    if (path.length > 4) {
      return
    }
    if (path.length === 4 && i === s.length) {
      ret.push(path.join('.'))
      return
    }

    for (let j = i; j < s.length; j++) {
      let str = s.substr(i, j - i + 1)
      if (Number(str) > 255) {
        break
      }

      if (str.length > 1 && str[0] === '0') {
        break
      }

      path.push(str)
      backTrack(j + 1)
      path.pop()
    }
  }
};
// @lc code=end

