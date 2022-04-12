/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  let ret = []
  if (root === null) {
    return ret
  }

  let queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let cur = queue.shift()

      if (len === 0) {
        ret.push(cur.val)
      }

      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return ret
};
// @lc code=end

