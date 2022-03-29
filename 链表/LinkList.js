

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
  constructor(equalsFn = defaultEquals) {
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


//============= 双向链表 ================
class DoublyNode extends Node {
  constructor(val, next, prev) {
    super(val, next)
    this.prev = prev
  }
}


class DoublyLinkList extends LinkNodeList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  insert(ele, index) {

    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(ele)
      let current = this.head
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.text = this.head
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = node
        node.pre = current
        this.tail = node
      } else {
        const previous = this.getVal(index - 1)
        current = previous.next
        node.next = current
        current.prev = node
        node.prev = previous
      }

      this.count++
      return true
    }
    return false
  }


  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getVal(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }

      this.count--
      return current.val
    }
    return undefined
  }
}




// 循环链表
class CircularLinkedList extends LinkNodeList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(ele, index) {
    if (index > 0 && index <= this.count) {
      const node = new Node(ele)
      let current = this.head
      if (index === 0) {
        if (this.head === null) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getVal(this.size())
          this.head = node
          current.next = this.head
        }
      } else {
        const previous = this.getVal(index - 1)
        node.next = previous.next
        previous.next = node
      }

      this.count++
      return true
    }

    return false
  }

  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getVal(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getVal(index - 1)
        current = previous.next
        previous.next = current
      }
      this.count--
      return current.val
    }
    return undefined
  }
}


// 有序链表
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}


function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}


class SortedLinkList extends LinkNodeList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(ele, index = 0) {
    if (this.isEmpty()) {
      return super.push(ele, 0)
    }
    const pos = this.getIndexNextSortedElement(ele)
    return super.push(ele, pos)
  }

  getIndexNextSortedElement(ele) {
    let current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(ele, current.val)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}