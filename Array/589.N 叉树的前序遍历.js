/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let ans = []
  traverse(root, ans)
  return ans
};


var traverse = function (root, ans) {
  if (!root) return null
  ans.push(root.val)
  for (const x of root.children) {
    traverse(x, ans)
  }
  return ans
}
// @lc code=end

