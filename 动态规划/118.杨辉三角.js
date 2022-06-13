/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let dp = new Array(numRows).fill(0)

  for (let i = 0; i < numRows; i++) {
    dp[i] = new Array(i + 1).fill(0)
    dp[i][0] = 1
    dp[i][i] = 1
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp
};
// @lc code=end
