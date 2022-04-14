/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  let ret = []
  if (root === null) {
    return ret
  }
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    let levelArr = []
    while (size--) {
      let cur = queue.shift()
      levelArr.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    ret.push(Math.max(...levelArr))
  }
  return ret
};
// @lc code=end

