/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i][j] 前i个数字是否能凑出j值
var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => {
    return pre + cur
  }, 0)

  // 奇数不能拆分
  if (sum % 2 !== 0) return false
  let n = nums.length
  sum = sum / 2
  let dp = new Array(n + 1).fill(false).map(() => {
    return new Array(sum + 1).fill(false)
  })

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }


  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - sum[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  console.log(dp);
  return dp[n][sum]
};
// @lc code=end

