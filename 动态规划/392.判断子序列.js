/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 贪心
var isSubsequence = function (s, t) {
  let i = 0
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++
    }
  }

  return i === s.length
}

// 动态规划
// dp  下标i结尾的字符串s 和下标j结尾的字符串t 相同子序列的长度
var isSubsequence1 = function (s, t) {
  let m = s.length
  let n = t.length

  let dp = new Array(m + 1).fill(0).map(() => {
    return new Array(n + 1).fill(0)
  })

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[m][n] === m
};


// @lc code=end

