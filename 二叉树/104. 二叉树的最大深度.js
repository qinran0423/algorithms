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
 * @return {number}
 */
var maxDepth = function (root) {
  // 1.赋予递归函数一个明确的意义

  // 2.思考边界条件
  if (!root) return 0
  // 实现递归过程
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};