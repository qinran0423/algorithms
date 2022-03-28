/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1.递归
// var fib = function (n) {
//   if (n <= 1) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// };
// 2.动态规划
var fib = function (n) {
  // dp[i] 就是i个值得数字
  // dp[i] = dp[i-1] + dp[i-2]
  // 初始值[0，1]
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
// @lc code=end

