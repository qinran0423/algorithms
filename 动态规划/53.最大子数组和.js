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
// 以num[i]为结尾的”最大子数组和“为dp[i]
// dp[i]有两个选择；
// 1. 与前面相邻子数组链接，形成一个和更大的子数组
// 2. 不与前面的子数组链接，自成一派，自己作为一个子数组
var maxSubArray = function (nums) {
  let n = nums.length
  let dp0 = nums[0]
  let dp1 = 0
  let res = dp0
  for (let i = 1; i < n; i++) {
    dp1 = Math.max(dp0 + nums[i], nums[i])
    dp0 = dp1
    res = Math.max(res, dp1)
  }
  return res
};
// @lc code=end

