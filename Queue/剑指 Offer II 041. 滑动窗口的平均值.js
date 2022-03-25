/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size
  this.queue = []
  this.sum = 0
};

/** 
* @param {number} val
* @return {number}
*/

//  执行用时：108 ms, 在所有 JavaScript 提交中击败了51.89%的用户
// 内存消耗： 47.9 MB, 在所有 JavaScript 提交中击败了10.69%的用户
// MovingAverage.prototype.next = function(val) {
//     if(this.queue.length >= this.size) {
//         this.queue.shift()
//     }
//     this.queue.push(val)
//     let initialValue = 0
//     let sum = this.queue.reduce((pre, cur) => pre + cur, initialValue)
//     return sum / this.queue.length
// };


// 执行用时：100 ms, 在所有 JavaScript 提交中击败了82.08%的用户
// 内存消耗：47.2 MB , 在所有 JavaScript 提交中击败了48.74%的用户
MovingAverage.prototype.next = function (val) {
  if (this.queue.length >= this.size) {
    this.sum -= this.queue.shift()
  }
  this.queue.push(val)
  this.sum += val

  return this.sum / this.queue.length

};

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/