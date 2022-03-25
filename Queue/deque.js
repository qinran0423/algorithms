

class Deque {
  constructor() {
    // 控制队列的大小
    this.count = 3
    // 由于要从队列前端移除元素，lowestCount记录第一个元素
    this.lowestCount = 0
    this.items = {
      0: 7,
      1: 8,
      2: 9
    }

  }
  // 前端添加元素
  addFront(s) {
    console.log(s);
    if (this.isEmpty()) {
      this.addBack(s)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = s
    } else {
      console.log('sss');
      for (let i = this.count; i < 0; i--) {
        this.items[i] = this.items[i - 1]
        console.log(i, this.items[i]);
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = s
    }
  }
  // 后端添加元素
  addBack(s) {

  }
  // 前端移除一个元素
  removeFront() {

  }
  // 后端移除一个元素
  removeBack() {

  }
  // 获取前端第一个元素
  peekFront() {

  }
  // 获取后端第一个元素
  peekBack() {

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


const deque = new Deque()

deque.addFront('1')
console.log(deque.items);
