/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {

  const ret = dfs(root)
  return Math.max(...ret)
  function dfs(node) {
    if (node === null) {
      return [0, 0]
    }
    const left = dfs(node.left)
    const right = dfs(node.right)
    const doSelf = node.val + left[0] + right[0]
    const doNotSelf = Math.max(...left) + Math.max(...right)

    return [doNotSelf, doSelf]
  }

};
// @lc code=end

