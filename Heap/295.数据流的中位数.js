/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
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


var MedianFinder = function () {
  // 小的放大顶堆里面
  this.maxHeap = new Heap((a, b) => a > b)
  // 大的放小顶堆里面
  this.minHeap = new Heap((a, b) => a < b)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.maxHeap.size() || num < this.maxHeap.peek()) {
    this.maxHeap.insert(num)
  } else {
    this.minHeap.insert(num)
  }
  // 两个堆的平衡
  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    let head = this.maxHeap.pop()
    this.minHeap.insert(head)
  } else if (this.maxHeap.size() < this.minHeap.size()) {
    let head = this.minHeap.pop()
    this.maxHeap.insert(head)
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if ((this.maxHeap.size() + this.minHeap.size()) % 2 === 0) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2
  }
  return this.maxHeap.peek()
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

