/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let ans = []
  getResult(root, 0, ans)
  for (let k = 1; k < ans.length; k += 2) {
    for (let i = 0, j = ans[k].length - 1; i < j; i++, j--) {
      [ans[k][i], ans[k][j]] = [ans[k][j], ans[k][i]]
    }
  }
  return ans
};



var getResult = function (root, k, ans) {
  if (!root) return null;
  if (k === ans.length) ans.push(new Array())
  ans[k].push(root.val)
  getResult(root.left, k + 1, ans)
  getResult(root.right, k + 1, ans)
}
// @lc code=end

