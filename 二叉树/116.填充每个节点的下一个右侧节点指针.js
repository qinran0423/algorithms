/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root
  }

  let queue = [root]
  while (queue.length) {
    let size = queue.length
    while (size--) {
      let cur = queue.shift()
      if (size > 0) {
        cur.next = queue[0]
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }


  return root

};
// @lc code=end

