
/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
      if (cur.children) {
        for (let i = 0; i < cur.children.length; i++) {
          queue.push(cur.children[i])
        }
      }
    }
    ret.push(levelArr)
  }


  return ret
};
// @lc code=end

