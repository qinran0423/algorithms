/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
// 两个队列来模拟栈

var MyStack = function () {

  this.queue1 = []
  this.queue2 = []

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // 1 
  // 队列1有值 [1,2,3], 此时想移除并返回栈顶元素  则需要讲队列1中的[1,2]放到对列2中备份
  // queue1 [3]  queue2[1,2]
  // 然后再弹出队列1中的值 就返回了栈顶元素
  // 2
  // 接上，如果此时再向队列1中推入数据4 
  // queue1[4] queue2[1,2]
  // 那就直接弹出队列1中的值 就返回了栈顶元素
  // 3
  // 接上 此时再次执行pop queue1 [] queue2 [1,2]
  // 那么就需要队列1中的值和对列2对换
  // queue1 [1,2]  queue2 []
  // 然后再次执行第一步
  if (this.queue1.length === 0) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1]
  }

  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift())
  }

  return this.queue1.shift()

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 先把栈顶元素弹出  然后再塞进去
  const x = this.pop()
  this.queue1.push(x)
  return x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

