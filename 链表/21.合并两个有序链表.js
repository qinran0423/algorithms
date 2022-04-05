/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 定义一个哨兵元素
  let dummy = {
    next: null
  }
  // 因为最后要返回的是dummy 所以用一个变量替换一下
  let temp = dummy
  // list1 list2 只要有一个遍历结束了 则退出循环
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      temp.next = list1
      list1 = list1.next
    } else {
      temp.next = list2
      list2 = list2.next
    }
    temp = temp.next
  }
  // 最后看看哪一个链表还剩下的 之后塞到temp里面
  temp.next = list1 === null ? list2 : list1

  return dummy.next

};
// @lc code=end

