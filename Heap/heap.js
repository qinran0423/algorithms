class Heap {
  constructor(data) {
    this.data = data;
    // 比较
    this.compartor = (a, b) => a - b;
    this.heapify()
  }
  size() {
    return this.data.length
  }
  heapify() {
    if (this.size() < 2) {
      return
    }

    for (let i = 1; i < this.size(); i++) {
      this.bubblUp(i)
    }
  }
  // 查看
  peek() {
    if (this.size() === 0) return null;
    return this.data[0]
  }
  // 添加
  offer(val) {
    this.data.push(val)
    this.bubblUp(this.size() - 1)
  }
  // 弹出第一个
  poll() {
    if (!this.size()) return null;
    let res = this.data[0]
    this.data[0] = this.data.pop()
    if (this.size()) {
      this.bubbleDown(0)
    }
    return res
  }

  bubbleDown(index) {
    let lastIndex = this.size() - 1;
    while (index < lastIndex) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let findIndex = index
      if (leftIndex < lastIndex && this.compartor(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex
      }

      if (rightIndex <= lastIndex && this.compartor(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex
      }

      if (index !== findIndex) {
        this.swap(index, findIndex)
        index = findIndex
      } else {
        break;
      }
    }

  }

  bubblUp(index) {
    while (index) {
      const parentIndex = (index - 1) >> 1
      if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}


let arr = [8, 7, 6, 5, 4, 3, 2, 1]

let minHeap = new Heap(arr)

console.log(arr)

console.log(minHeap.poll())