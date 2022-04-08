/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return root
  }
  // 如果根节点 等于 P 或者 q 那么根节点就是最近的公共祖先
  if (root === p || root === q) {
    return root
  }

  // 从左节点查找
  let left = lowestCommonAncestor(root.left, p, q)
  // 从右节点查找
  let right = lowestCommonAncestor(root.right, p, q)

  // 如果在左节点和右节点都找到了  说明是两边分散的
  if (left && right) {
    return root
  }

  return left ? left : right



};
// @lc code=end

