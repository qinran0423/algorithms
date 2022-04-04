/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // let n = nums.length
  // let result = n + 1
  // for (let i = 0; i < n; i++) {
  //   let sum = 0
  //   for (let j = i; j < n; j++) {
  //     sum += nums[j]
  //     if (sum >= target) {
  //       let sublen = j - i + 1
  //       result = result < sublen ? result : sublen
  //     }
  //   }
  // }

  // return result > n ? 0 : result


  let n = nums.length
  // 定义一个最大的值 为什么要定义呢？
  // 首先结果不可能大于n+1 因为最差的可能是nums的所有的值全部都遍历完了才找到了结果
  let result = n + 1
  let slow = fast = 0
  let sum = 0
  while (fast < n) {
    // 每次加完值之后 fast就移动下一位了  所以 下面的 fast - slow不需要 +1
    sum += nums[fast++]
    // sum += nums[fast]
    // fast++
    // 当sum大于等于target的时候 则说明已经找到结果了   当然 可能不是最优的结果
    while (sum >= target) {
      // 获取子数组的长度
      let subLen = fast - slow
      // result > subLen 说明有最优解
      result = result < subLen ? result : subLen
      sum -= nums[slow++]
    }
  }
  return result > n ? 0 : result
};
// @lc code=end

