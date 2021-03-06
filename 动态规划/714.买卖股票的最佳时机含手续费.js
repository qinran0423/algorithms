/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 动态规划
var maxProfit = function (prices, fee) {
  let len = prices.length
  let has = -prices[0] - fee
  let notHas = 0
  for (let i = 1; i < len; i++) {
    has = Math.max(has, notHas - prices[i] - fee)
    notHas = Math.max(notHas, has + prices[i])
  }
  return notHas
}




// 贪心
var maxProfit1 = function (prices, fee) {
  let ret = 0
  let minPrice = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }

    if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue
    }

    if (prices[i] > minPrice + fee) {
      ret += prices[i] - minPrice - fee
      minPrice = prices[i] - fee
    }
  }


  return ret


};




// 动态规划
var maxProfit2 = function (prices, fee) {
  let n = prices.length
  let dp = new Array(n).fill(0).map(() => {
    return new Array(2).fill(0)
  })
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }


  return Math.max(dp[n - 1][0], dp[n - 1][1])
}

// @lc code=end

