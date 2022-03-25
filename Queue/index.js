

class Queue {
  constructor() {
    // 控制队列的大小
    this.count = 0
    // 由于要从队列前端移除元素，lowestCount记录第一个元素
    this.lowestCount = 0
    this.items = {}

  }

  // 添加
  enqueue(s) {
    this.items[this.count] = s
    this.count++
  }
  // 移除第一项
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }

    const ret = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return ret
  }
  // 返回队列第一个元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.lowestCount]
  }
  // 是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  // 元素个数
  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `${objString}, ${this.items[i]}`
    }

    return objString
  }
}


const queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue('Randy')

console.log(queue.toString());