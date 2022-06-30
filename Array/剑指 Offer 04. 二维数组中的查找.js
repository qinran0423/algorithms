/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let row = matrix.length - 1,
    col = 0;
  let len = matrix[0].length
  while (row >= 0 && col < len) {
    const num = matrix[row][col]
    if (num === target) {
      return true
    } else if (num > target) {
      row--
    } else if (num < target) {
      col++
    }
  }
  return false
};
