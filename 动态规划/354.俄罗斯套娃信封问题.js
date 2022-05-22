/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let n = envelopes.length
  if (n === 0) return 0
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    } else {
      return b[1] - a[1]
    }
  })
  console.log(envelopes)

  let height = Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    height[i] = envelopes[i][1]
  }
  console.log(height)
  let dp = Array(n).fill(1)
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < i; j++) {
      if (height[i] > height[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
};
// @lc code=end

