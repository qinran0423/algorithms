/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// 两个皇后会打架的情况（r,c)  (row, col)
// r === row  c=== col  r-c === row-col  r+c === row+col

// [1，3，0，2]这个是path对应的解 最后转成‘..Q.’

var solveNQueens = function (n) {
  let res = []
  let path = []
  backTrack(0, path)
  return res
  function backTrack(row, tmp) {
    // 终止条件
    if (row === n) {
      res.push(
        tmp.map(c => {
          let arr = new Array(n).fill('.')
          arr[c] = 'Q'
          return arr.join('')
        })
      )
    }

    for (let col = 0; col < n; col++) {
      // [1,3,0,2]
      // 
      let canNotSet = tmp.some((c, r) => {
        return c === col || ((r - c) === (row - col)) || ((r + c) === (row + col))
      })

      if (canNotSet) {
        continue
      }

      backTrack(row + 1, [...tmp, col])
    }
  }
};
// @lc code=end

