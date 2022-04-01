/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return nums
  // 定义快慢指针
  let slow = 0, fast = 0
  while (fast < nums.length) {
    // 如果快指针的值不为0 则和慢指针的值交换位置
    // 同时慢指针向前走一步
    if (nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    // 快指针一直向前走
    fast++
  }
  return nums
};
// @lc code=end

