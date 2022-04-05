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
  // 定义一个哨兵元素
  let ret = new ListNode(null, head)
  // 最后需要返回的是ret 所以需要一个变量替换
  let pre = ret
  // 需要反转的个数
  let n = right - left + 1
  // 找到反转的起点
  while (--left) {
    pre = pre.next
  }
  // 找到起点后开始反转
  pre.next = reverse(pre.next, n)
  return ret.next
};


var reverse = function (head, n) {
  let prev = null, cur = head
  while (n--) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  // head此时已经变成了最后一个节点了， 所以他需要指向下一位，此时下一位是cur
  head.next = cur
  return prev
}



// @lc code=end

