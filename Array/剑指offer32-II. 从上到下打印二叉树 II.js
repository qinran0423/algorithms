/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = []
  getResult(root, 0, ans)
  return ans
};


var getResult = function (root, k, ans) {
  if (!root) return null;
  if (k === ans.length) ans.push(new Array())
  ans[k].push(root.val)
  // TODO
  // 为什么不能用k++
  getResult(root.left, k + 1, ans)
  getResult(root.right, k + 1, ans)
}
