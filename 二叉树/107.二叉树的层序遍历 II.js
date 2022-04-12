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
  let ret = []
  if (root === null) {
    return ret
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let levelArr = []
    while (len--) {
      let cur = queue.shift()
      levelArr.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }

    ret.unshift(levelArr)
  }

  return ret
};

// @lc code=end

