/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null
  let ret = new ListNode(null, head), pre = ret;
  do {
    pre.next = reverse(pre.next, k)
    for (let i = 0; i < k && pre; i++) {
      pre = pre.next
    }
    if (!pre) break;
  } while (1)

  return ret.next
};

var reverse = function (head, n) {
  let pre = head, cur = head, con = n;
  while (--n && pre) {
    pre = pre.next
  }

  if (!pre) return head;
  pre = null
  while (con--) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }

  head.next = cur
  return pre
}

// @lc code=end

