/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root) {
//   let arr = []

//   function dfs(root) {
//     if (!root) return root;
//     arr.push(root.val)
//     dfs(root.left)
//     dfs(root.right)

//   }
//   dfs(root)

//   return arr
// };

var preorderTraversal = function (root) {
  let res = []
  if (!root) return res;

  let stack = [root]

  while (stack.length) {
    // 拿出来最后一个节点
    let cur = stack.pop()
    // 将值放进res
    res.push(cur.val)
    // 如果右节点存在 在推入stack中
    cur.right && stack.push(cur.right)
    // 如果左节点存在 在推入stack中
    cur.left && stack.push(cur.left)
    // 【right, left】
  }

  return res

}
// @lc code=end

