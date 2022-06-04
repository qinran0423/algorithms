/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// dp[i]：当目标金额为i时， 至少需要 dp[i]枚硬币凑出
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        // 比如 11 =》 10 + 1  10的最少硬币数 + 1
        //        =》 9 + 2   9的最少硬币数 + 1
        //        =》 6 + 5   6的最少硬币数 + 1

        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

