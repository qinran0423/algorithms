/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  if (!root) return res
  let stack = [root]
  while (stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
  }
  return res

};
// @lc code=end

