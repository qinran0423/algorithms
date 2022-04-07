/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// var minDepth = function (root) {
//   // 如果根节点为null  深度就是0
//   if (root === null) {
//     return 0
//   }
//   // 根节点的左右都没有节点  深度就是根节点一个 1
//   if (root.left === null && root.right === null) {
//     return 1
//   }
//   // 左节点不存在 右节点存在 则递归
//   if (root.left === null && root.right) {
//     return 1 + minDepth(root.right)
//   }
//   // 右节点不存在， 左节点存在 则递归
//   if (root.right === null && root.left) {
//     return 1 + minDepth(root.left)
//   }

//   // 两个节点都存在 取最小的
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1
// };


var minDepth = function (root) {
  if (!root) return 0;

  let stack = [root]
  let dept = 0
  while (true) {
    let size = stack.length;
    dept++;
    while (size--) {
      // 为什么用shift 不用pop?
      // 举个例子
      //             3
      //           /  \
      //         9    20
      //       / \    / \
      //     6   8   15  7
      // 第二层的时候  pop() 拿到的是20 然后接着push了 15  7
      // 然后需要的是两次遍历  再次拿到的是7  而此时 我们希望拿到的是 9
      // 拿到7之后他的左右都是null  就直接返回了 dept 了  
      // 而shift则正确处理
      let cur = stack.shift()
      if (!cur.left && !cur.right) {
        return dept
      }
      cur.left && stack.push(cur.left);
      cur.right && stack.push(cur.right);
    }
  }
}
// @lc code=end

