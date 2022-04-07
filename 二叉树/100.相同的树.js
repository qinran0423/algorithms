/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   // 如果两个节点都为null  则返回true
//   if (p === null && q === null) {
//     return true
//   }
//   // 如果两个节点有一个为null 另一个不是 则返回false
//   if (p === null || q === null) {
//     return false
//   }
//   // 如果节点的val 不一样 则返回false
//   if (p.val !== q.val) {
//     return false
//   }
//   // 如果节点相同 则递归
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// };


// var isSameTree = function (p, q) {

//   const traverse = (p, q) => {
//     if (p === null && q === null) {
//       return true
//     }
//     if (p === null || q === null) {
//       return false
//     }

//     let left = traverse(p.left, q.left)
//     let right = traverse(p.right, q.right)


//     if (p.val === q.val && left && right) {
//       return true
//     }

//     return false

//   }

//   return traverse(p, q)
// }


var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }

  if (p === null || q === null) {
    return false
  }

  let queueP = [p]
  let queueQ = [q]
  while (queueP.length && queueQ.length) {
    let curP = queueP.pop()
    let curQ = queueQ.pop()

    if (curP.val !== curQ.val) {
      return false
    }

    if (curP.left && curQ.left) {
      queueP.push(curP.left)
      queueQ.push(curQ.left)
    } else if (curP.left || curQ.left) {
      return false
    }

    if (curP.right && curQ.right) {
      queueP.push(curP.right)
      queueQ.push(curQ.right)
    } else if (curP.right || curQ.right) {
      return false
    }

  }

  return queueP.length === 0 && queueQ.length === 0


}
// @lc code=end

