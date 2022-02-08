/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 1.==============
// var removeElements = function (head, val) {
//   if (!head) return null;
//   head.next = removeElements(head.next, val)
//   return head.val === val ? head.next : head
// };

// 2.=============
var removeElements = function (head, val) {
  let pre = new ListNode(null, head)
  let ret = pre
  while (ret.next) {
    if (ret.next.val === val) {
      ret.next = ret.next.next
    } else {
      ret = ret.next
    }
  }
  return pre.next
};