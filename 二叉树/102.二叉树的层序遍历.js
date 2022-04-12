/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  let ret = []

  if (root === null) {
    return ret
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let levelArr = []
    while (len > 0) {
      let cur = queue.shift();
      levelArr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      len--;
    }

    ret.push(levelArr)
  }

  return ret
};
// @lc code=end

