
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  // 添加一个或多个新元素到栈顶
  push(s) {
    this.items[this.count] = s
    this.count++
  }

  // 移除栈顶元素，同时返回被移除的元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回）
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  // 如果栈里没有任何元素就返回true, 否则就返回false
  isEmpty() {
    return this.count === 0
  }

  // 移除栈里的所有元素
  clear() {
    this.items = {}
    this.count = 0

    // 或者
    // while (!this.isEmpty()) {
    //   this.pop()
    // }
  }

  // 返回栈里的元素个数
  size() {
    return this.count
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}



module.exports = {
  Stack
}