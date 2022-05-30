/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// dp[i][0]  不买也不卖
// dp[i][1]  第一次买入
// dp[i][2]  第一次卖出
// dp[i][3]  第二次买入
// dp[i][4]  第二次卖出


var maxProfit = function (prices) {
  const len = prices.length
  let dp = new Array(len).fill(0).map(() => {
    return new Array(5).fill(0)
  })
  // 初始状态 第一天
  dp[0][1] = -prices[0]
  dp[0][3] = -prices[0]

  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0]
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]) // 之前买入 和 之前没有买当天买
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]) // 之前卖出 和 之前没有卖出当天卖出
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]) // 之前买入 和 之前没有买当天买
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]) // 之前卖出 和 之前没有卖出当天卖出
  }

  return dp[len - 1][4]

};
// @lc code=end

