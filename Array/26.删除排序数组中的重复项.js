/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) return 0;

  let fast = 1, slow = 1
  while (fast < n) {
    // fast是试探路的 当前的值和前一个值对比 如果相同则一直移动
    // 如果不同则赋值给slow
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end

