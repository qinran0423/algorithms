/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
  let ans = []
  getResult(root, 0, ans)
  for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
    [ans[i], ans[j]] = [ans[j], ans[i]]
  }
  return ans

};



var getResult = function (root, k, ans) {
  if (!root) return null
  if (k === ans.length) ans.push(new Array())
  ans[k].push(root.val)
  getResult(root.left, k + 1, ans)
  getResult(root.right, k + 1, ans)
}
// @lc code=end

