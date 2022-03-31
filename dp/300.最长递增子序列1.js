/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 贪心 + 二分
  // 边界条件
  let n = nums.length
  if (n === 0) {
    return 0
  }
  // 定义一个初始值
  let arr = [nums[0]]
  for (let i = 0; i < n; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      // 如果当前遍历的值比arr的最后一个值(也就是最大值)大，则直接放进去
      arr.push(nums[i])
    } else {
      // 找到arr中第一个比nums[i]大的值  替换
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        let mid = (left + right) >> 1
        if (arr[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      arr[left] = nums[i]
    }
  }
  return arr.length
};
// @lc code=end

