/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 定义快慢指针
  let slow = fast = head
  let prev = null
  // 将链表从中间的位置开始左边的全部反转
  //  1->2->3->2->1
  //  1<-2<-3->2->1  
  while (fast && fast.next) {
    fast = fast.next.next;
    [slow.next, prev, slow] = [prev, slow, slow.next]
  }

  // 偶数
  //  1 <- 2 <- 2 -> 1
  //      prev  slow
  //  奇数
  //  1 <- 2 <- 3 -> 2 -> 1 
  //     prev  slow
  // 如果为奇数 就是上面的情况
  // 但是我们想判断前后的值是否一一致则需要slow向后再走一位
  if (fast) {
    slow = slow.next
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
};
// @lc code=end

