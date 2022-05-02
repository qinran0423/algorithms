/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = []
  let path = []
  dfs(n, k, 1)
  return ret

  function dfs(n, k, i) {
    let len = path.length
    if (len === k) {
      return ret.push([...path])
    }
    for (let j = i; j <= n; j++) {
      path.push(j)
      dfs(n, k, j + 1)
      path.pop()
    }
  }
};
// @lc code=end

