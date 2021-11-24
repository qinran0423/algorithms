/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  let ret = new ListNode(null, head), pre = ret, n = right - left + 1;
  while (--left) {
    pre = pre.next
  }

  pre.next = reverse(pre.next, n)

  return ret.next


};


var reverse = function (head, n) {
  let pre = null, cur = head
  while (n--) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }

  head.next = cur
  return pre
}



// @lc code=end

