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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // // 1.赋予递归函数一个明确的意义

  // // 2.思考边界条件
  // if (!root) return null;
  // // 3.实现递归过程
  // [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  // return root



  if (!root) return null;
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
};