/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果两个节点都为null  则返回true
  if (p === null && q === null) {
    return true
  }
  // 如果两个节点有一个为null 另一个不是 则返回false
  if (p === null || q === null) {
    return false
  }
  // 如果节点的val 不一样 则返回false
  if (p.val !== q.val) {
    return false
  }
  // 如果节点相同 则递归
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

