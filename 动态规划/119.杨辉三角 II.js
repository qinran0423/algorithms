/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

  const dp = new Array(rowIndex + 1).fill(0)


  for (let i = 0; i <= rowIndex; i++) {
    dp[i] = new Array(i + 1).fill(0)
    dp[i][0] = 1
    dp[i][i] = 1

    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp[rowIndex]
};
// @lc code=end

