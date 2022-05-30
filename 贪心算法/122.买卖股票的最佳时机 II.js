/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心
var maxProfit1 = function (prices) {
  let ret = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      ret += prices[i] - prices[i - 1]
    }
  }
  return ret
};
// @lc code=end

