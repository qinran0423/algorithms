/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // nums的值平方之后 前面的值是递减 后面的值是递增
  let left = 0
  let right = nums.length - 1
  let arr = Array(nums.length)
  let k = right
  while (left <= right) {
    let l = nums[left] * nums[left]
    let r = nums[right] * nums[right]
    // 前后的值进行对比 哪个值大哪个放在后面
    if (l < r) {
      arr[k] = r
      right--
    } else {
      arr[k] = l
      left++
    }
    k--
  }

  return arr
};
// @lc code=end

