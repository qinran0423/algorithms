/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length
  let dp = triangle[triangle.length - 1]
  console.log(dp);
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }

  return dp[0]
};









var minimumTotal1 = function (triangle) {
  let n = triangle.length
  let dp = new Array(n).fill(0).map(() => {
    return new Array(triangle[n - 1].length).fill(0)
  })

  dp[n - 1] = triangle[n - 1]
  console.log(dp);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }

  return dp[0][0]

};
// @lc code=end

