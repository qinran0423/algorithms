/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) { // 遍历硬币
    for (let j = coins[i]; j <= amount; j++) { // 凑齐amount 剩下的空间 
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
};
// @lc code=end

