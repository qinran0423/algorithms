/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 说明这个节点有值 直接跳过
      if (board[i][j] !== '.') {
        continue
      }

      // 这个节点没有值的话
      // 需要给他设置值 1-9
      for (let k = 1; k <= 9; k++) {
        k = k.toString()
        // 首先需要校验这个k是否满足规则
        if (isValid(board, i, j, k)) {
          board[i][j] = k
          // 给下一个格子设置值
          if (solveSudoku(board)) {
            return true
          }
          board[i][j] = '.'
        }
      }
      // 放不了 说明 1-9之间的数放进去都有问题  则说明前面的只放的有问题
      return false
    }
  }

  return true
};


function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === k || board[i][col] === k) {
      return false
    }
  }

  const x = Math.floor(row / 3) * 3
  const y = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === k) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

