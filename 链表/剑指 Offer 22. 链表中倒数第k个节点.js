/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let p1 = p2 = head
  while (k--) {
    p1 = p1.next
  }


  while (p1) {
    p2 = p2.next
    p1 = p1.next
  }

  return p2


};
