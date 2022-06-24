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



const heap = new Heap((a, b) => a > b) // 大顶堆
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
console.log(heap.heap);

heap.pop()
console.log(heap.heap);