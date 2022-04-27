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
  // 遍历board中的每一个值
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 如果值不是.是数字则直接跳过
      if (board[i][j] !== '.') {
        continue
      }

      // 否则就放置数字
      for (let k = 1; k <= 9; k++) {
        // 判断数独是不是合理
        k = k.toString()
        if (isValid(board, i, j, k)) {
          board[i][j] = k

          if (solveSudoku(board)) {
            return true
          }

          board[i][j] = '.'
        }

      }
      // 放不了 
      return false
    }
  }
  // 放完了 找到解了
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

