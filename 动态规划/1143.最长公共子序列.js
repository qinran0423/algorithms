/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// dp[i][j]
// text1的i之前的字符串 和 text2的j 之前的字符串的最长公共子序列的长度就是dp[i][j]

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  let dp = new Array(m + 1).fill(0).map(() => {
    return new Array(n + 1).fill(0)
  })

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 因为开始循环是从i = 1， j = 1开始的 
      // 但是 text1 和text2索引从0开始 所以要 -1
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

