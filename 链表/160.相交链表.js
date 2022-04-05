/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA
  let curB = headB
  // 1->2->3->4
  // 5->3->4
  // A遍历完了遍历B
  // 1->2->3->4->5->3->4
  // B遍历完了遍历A
  // 5->3->4->1->2->3->4
  // 此时就能保证链表的长度  最后倒数第二个值 3节点就找到了
  while (curA !== curB) {
    curA = curA === null ? headB : curA.next
    curB = curB === null ? headA : curB.next
  }

  return curA

};
// @lc code=end

