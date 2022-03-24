
class Stack {
  constructor() {
    this.items = []
  }

  // 添加一个或多个新元素到栈顶
  push(s) {
    this.items.push(s)
  }

  // 移除栈顶元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  // 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回）
  peek() {
    return this.items[this.items.length - 1]
  }

  // 如果栈里没有任何元素就返回true, 否则就返回false
  isEmpty() {
    return this.items.length === 0
  }

  // 移除栈里的所有元素
  clear() {
    this.items = []
  }

  // 返回栈里的元素个数
  size() {
    return this.items.length
  }
}


const stack = new Stack()
console.log(stack.isEmpty());

stack.push(5)
stack.push(8)

console.log(stack.peek());