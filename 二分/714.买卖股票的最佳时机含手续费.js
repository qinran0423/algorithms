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
// 贪心
var maxProfit = function (prices, fee) {
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
// @lc code=end

