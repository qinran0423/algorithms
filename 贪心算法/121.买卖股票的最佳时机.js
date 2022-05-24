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
var maxProfit = function (prices) {
  // 贪心
  let low = Infinity
  let ret = 0
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i])
    ret = Math.max(ret, prices[i] - low)
  }

  return ret
};
// @lc code=end

