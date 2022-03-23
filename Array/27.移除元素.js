/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 1.----------------
// var removeElement = function (nums, val) {
//   if (nums.length === 0) return 0;

//   let left = 0
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== val) {
//       nums[left] = nums[right]
//       left++
//     }
//   }
//   return left
// };

// 2.-----------------
var removeElement = function (nums, val) {
  let left = 0, right = nums.length

  while (left < right) {
    // 从左边开始查，如果查到的值和val 一样， 则吧后面的数拿过来
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      // 如果不一样则继续向下查
      left++
    }
  }
  return left
};
// @lc code=end

