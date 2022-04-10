/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {

  function traverse(root) {

    if (root === null) return 0

    let leftDepth = traverse(root.left)
    let rightDepth = traverse(root.right)
    // 如果左节点或者右节点有一个不是高度平衡的二叉树 说明不满足
    if (leftDepth === -1 || rightDepth === -1) {
      return -1
    }
    // 如果左边节点的高度和右边节点的高度相减的绝对值 大于 1 说明不是高度平衡的二叉树
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    } else {
      // 否则返回节点的最大深度
      return Math.max(leftDepth, rightDepth) + 1
    }

  }

  return traverse(root) !== -1

};



// @lc code=end

