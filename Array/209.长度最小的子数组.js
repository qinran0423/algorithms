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
  // let len = nums.length
  // let result = len + 1
  // for (let i = 0; i < len; i++) {
  //   let sum = 0
  //   for (let j = i; j < len; j++) {
  //     sum += nums[j]
  //     if (sum >= target) {
  //       let sublen = j - i + 1
  //       result = result < sublen ? result : sublen
  //       break
  //     }
  //   }
  // }
  // return result > len ? 0 : result
  let len = nums.length
  let slow = fast = 0
  let sum = 0
  let result = len + 1
  while (fast < len) {
    sum += nums[fast++]
    while (sum >= target) {
      let subLen = fast - slow
      result = result < subLen ? result : subLen
      sum -= nums[slow++]
    }
  }
  return result > len ? 0 : result
};
// @lc code=end

