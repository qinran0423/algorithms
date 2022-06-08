//给你⼀个可装载重量为 W 的背包和 N 个物品，每个物品有重量和价值两个属性。其中第 i 个物品的重量为
// wt[i]，价值为 val[i]，现在让你⽤这个背包装物品，最多能装的价值是多少？

let N = 3
let W = 4
let wt = [2, 1, 3]
let val = [4, 2, 3]

// 1. 状态 和 选择
// 背包的容量   可选择的物品
// 2.dp数组的定义
//  dp[i][w] => 前i个物品，当前背包的容量为w，可以装的最大价值是dp[i][w]
function knapsack() {
  let dp = new Array(N + 1).fill(0).map(() => {
    return new Array(W + 1).fill(0)
  })

  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      if (w - wt[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w]
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w - wt[i - 1]] + val[i - 1], // 放进去
          dp[i - 1][w] // 不放进去
        )
      }
    }
  }
  console.log(dp);
  return dp[N][W]
}
console.log(knapsack());