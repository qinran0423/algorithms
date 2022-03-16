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
  // 先排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 固定i对应的值
    // 如果和上一个值一样则直接跳过 避免重复
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1; // 左指针
    let right = nums.length - 1; //右指针
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right] === 0
      if (right === i) {
        right--
      } else if (sum === 0) {
        // 如果和为0 直接push
        res.push([nums[i], nums[left], nums[right]])
        // 判断下一个值和当前的值是不是一样 一样的话跳过
        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++
        // 判断下一个值和当前的值是不是一样 一样的话跳过
        while (nums[right] === nums[right + 1]) {
          right--
        }
        right--

      } else if (sum > 0) { // 说明当前计算结果大了  所以右指针左移  变小
        right--
      } else if (sum < 0) {// 说明当前计算结果小了  所以左指针右移  变大
        left++
      }

    }

  }

  return res
};
// @lc code=end
