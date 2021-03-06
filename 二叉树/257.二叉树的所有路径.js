/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let patharr = []

  function traverse(root, path) {
    if (root === null) return root;
    // 已经到了叶子节点了
    if (root.left === null && root.right === null) {
      patharr.push(path + root.val)
    }
    traverse(root.left, path + root.val + '->')
    traverse(root.right, path + root.val + '->')
  }


  traverse(root, '')

  return patharr
};
// @lc code=end
