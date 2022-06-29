/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn
    this.heap = []
  }

  insert(value) {
    // 向堆中插入值： 将值插入堆的底部叶节点在执行siftUp
    if (value !== null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[index], this.heap[parent])) {
      this.swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  siftDown(index) {
    while (this.getLeftIndex(index) < this.size()) {
      let element = this.getLeftIndex(index)
      if (this.getRightIndex(index) < this.size() && this.compareFn(this.heap[this.getRightIndex(index)], this.heap[this.getLeftIndex(index)])) {
        element = this.getRightIndex(index)
      }

      if (this.compareFn(this.heap[index], this.heap[element])) {
        return
      }

      this.swap(this.heap, index, element)
      index = element
    }
  }

  swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  pop() {
    // 弹出堆顶元素
    this.swap(this.heap, 0, this.heap.length - 1)
    let head = this.heap.pop()
    this.siftDown(0)

    return head
  }

  peek() {
    // 获取堆顶元素
    return this.isEmpty() ? undefined : this.heap[0]
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined
    }

    return Math.floor((index - 1) / 2)
  }
}



var mergeKLists = function (lists) {
  let dummy = new ListNode(null)
  let temp = dummy


  let pq = new Heap((a, b) => a.val < b.val)

  for (const head of lists) {
    pq.insert(head)
  }

  while (!pq.isEmpty()) {
    let node = pq.pop()
    temp.next = node

    if (node.next) {
      pq.insert(node.next)
    }
    temp = temp.next
  }


  return dummy.next


};
// @lc code=end
