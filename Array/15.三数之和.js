/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  let res = []

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right] === 0
      if (right === i) {
        right--
      } else if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++
        while (nums[right] === nums[right + 1]) {
          right--
        }
        right--

      } else if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      }

    }

  }

  return res
};
// @lc code=end
