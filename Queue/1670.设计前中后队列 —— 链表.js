class Node {
  constructor(val) {
    this.val = val;
    this.pre = null;
    this.next = null;
  }

  insert_pre(p) {
    p.next = this;
    p.pre = this.pre;
    this.pre && (this.pre.next = p);
    this.pre = p;
  }

  insert_next(p) {
    p.pre = this;
    p.next = this.next;
    this.next && (this.next.pre = p);
    this.next = p;
  }

  delete_node() {
    this.next && (this.next.pre = this.pre);
    this.pre && (this.pre.next = this.next);
  }
}

class Dequeue {
  constructor() {
    this.cnt = 0;
    this.head = new Node(-1);
    this.tail = new Node(-1);
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  push_back(val) {
    this.tail.insert_pre(new Node(val));
    this.cnt++;
  }

  push_front(val) {
    this.head.insert_next(new Node(val));
    this.cnt++;
  }

  pop_back() {
    let ret = this.tail.pre.val;
    if (this.cnt) {
      this.tail.pre.delete_node();
      this.cnt--;
    }
    return ret;
  }

  pop_front() {
    let ret = this.head.next.val;
    if (this.cnt) {
      this.head.next.delete_node();
      this.cnt--;
    }
    return ret;
  }

  getFront() {
    return this.head.next.val;
  }

  getRear() {
    return this.tail.pre.val;
  }

  size() {
    return this.cnt;
  }
}

var FrontMiddleBackQueue = function () {
  this.q1 = new Dequeue();
  this.q2 = new Dequeue();
};

FrontMiddleBackQueue.prototype.update = function () {
  if (this.q1.size() < this.q2.size()) {
    this.q1.push_back(this.q2.pop_front());
  } else if (this.q1.size() === this.q2.size() + 2) {
    this.q2.push_front(this.q1.pop_back());
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.q1.push_front(val);
  this.update();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.q1.size() === this.q2.size() + 1) {
    this.q2.push_front(this.q1.pop_back());
  }
  this.q1.push_back(val);
  this.update();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.q2.push_back(val);
  this.update();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  let ret = this.q1.popFront();
  this.update();
  return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  let ret = this.q1.pop_back();
  this.update();
  return ret;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  let ret = this.q2.size() ? this.q2.pop_back() : this.q1.pop_back();
  this.update();
  return ret;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
