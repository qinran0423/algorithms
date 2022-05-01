var MinStack = function () {
  this.mainStack = []
  this.minStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.mainStack.push(val)
  // if(this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]) {
  //     this.minStack.push(val)
  // }
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.mainStack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.mainStack[this.mainStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */