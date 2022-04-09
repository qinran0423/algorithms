/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
// 后序遍历
var diameterOfBinaryTree = function (root) {
  let len = 0
  function dfs(root) {
    if (root === null) {
      return root
    }
    // 先遍历左节点
    let left = dfs(root.left)
    // 再遍历右节点
    let right = dfs(root.right)
    // 主要找到结果的最大值
    len = Math.max(len, left + right)

    return Math.max(left, right) + 1

  }

  dfs(root)

  return len

};
// @lc code=end

