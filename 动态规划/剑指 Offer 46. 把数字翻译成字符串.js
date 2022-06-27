/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let s = num.toString()
  let n = s.length
  // dp[i]=> 第i个值有多少种翻译方法
  let dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i < n + 1; i++) {
    const tmp = Number(s[i - 2] + s[i - 1])
    console.log(tmp)
    if (tmp >= 10 && tmp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }


  return dp[n]

};