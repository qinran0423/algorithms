/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
// var maxProfit = function (prices) {
//   let low = Infinity
//   let ret = 0
//   for (let i = 0; i < prices.length; i++) {
//     low = Math.min(low, prices[i])
//     ret = Math.max(ret, prices[i] - low)
//     console.log(ret);
//   }
//   return ret
// };
// 动态规划
// dp[i] = [ 第i天持有股票所得的最多的现金， 第i天不持有股票所得的最多的现金 ]

var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill([0, 0])

  dp[0] = [-prices[0], 0]

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]), // 前一天持有股票则维持不动，和， 当前买入股票
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])// 前一天不持有股票则维持不动， 和， 当前卖出股票和前面持有股票的现金差
    ]
  }
  return dp[prices.length - 1][1]

};
// @lc code=end

