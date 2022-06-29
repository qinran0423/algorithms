/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(null)
  let tmp = dummy
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tmp.next = l1
      l1 = l1.next
    } else {
      tmp.next = l2
      l2 = l2.next
    }
    tmp = tmp.next
  }

  tmp.next = l1 === null ? l2 : l1
  return dummy.next
};
