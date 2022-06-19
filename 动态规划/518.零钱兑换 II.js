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
// dp[i][j] => 若只使用coins中的前i个硬币的面值，想凑出金额j，有dp[i][j]种凑法

var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i]]
      }
    }
  }
  return dp[amount]
}


var change1 = function (amount, coins) {
  let n = coins.length
  let dp = new Array(n + 1).fill(0).map(() => {
    return new Array(amount + 1).fill(0)
  })

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[n][amount]
  // 不使用第i个硬币的面值
  // dp[i][j] = dp[i - 1][j]

  // // 使用第i个硬币的面值
  // dp[i][j] = dp[i][j - coins[i - 1]]
};
// @lc code=end

