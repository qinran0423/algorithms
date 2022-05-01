/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡 + 优化
var sortArray = function (nums) {
  let lastChangeIndex = 0
  let sortBorder = nums.length - 1
  for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true
    for (let j = 0; j < sortBorder; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        isSorted = false
        lastChangeIndex = j
      }
    }
    sortBorder = lastChangeIndex
    if (isSorted) break;
  }

  return nums

};

// @lc code=end

