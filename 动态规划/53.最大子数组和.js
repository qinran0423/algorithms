/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length
  if (n === 0) return 0
  let dp = new Array(n)
  dp[0] = nums[0]
  dp[1] = 0
  let res = dp[0]
  for (let i = 1; i < n; i++) {
    dp[1] = Math.max(nums[i], dp[0] + nums[i])
    dp[0] = dp[1]
    res = Math.max(res, dp[1])
  }
  return res
};
// @lc code=end

