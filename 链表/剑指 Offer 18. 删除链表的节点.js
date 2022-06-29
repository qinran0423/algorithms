/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let dummy = new ListNode(null, head)
  let tmp = dummy
  while (tmp.next) {
    if (tmp.next.val === val) {
      tmp.next = tmp.next.next
    } else {
      tmp = tmp.next
    }
  }

  return dummy.next
};
