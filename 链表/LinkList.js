

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

function defaultEquals(a, b) {
  return a === b
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.count = 0
  }

  push(element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        // 1.--------
        // let prev;
        // for (let i = 0; i < index; i++) {
        //   prev = current
        //   current = current.next
        // }
        // prev.next = current.next
        // 2.--------
        const prev = this.getVal(index - 1)
        current = prev.next
        prev.next = current.next

      }
      this.count--
      return current.val
    }

    return undefined
  }
  // 查找
  getVal(index) {
    console.log(this.count);
    if (index > 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  insert(ele, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(ele)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const prev = this.getVal(index - 1)
        node.next = prev.next
        prev.next = node
      }
      this.count++
      return true
    }
    return false
  }


  indexOf(ele) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.defaultEquals(ele, current.val)) {
        return i
      }
      current = current.next
    }

    return -1
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.val}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString}=>${current.val}`
      current = current.next
    }
    return objString
  }
}

let linkList = new LinkNodeList()

linkList.push(1)
linkList.push(2)
linkList.push(3)

console.log(linkList.toString());