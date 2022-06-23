/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var nSumTarget = function (nums, n, start, target) {

  let res = []
  let len = nums.length
  nums.sort((a, b) => a - b)
  if (n < 2 || len < n) return res
  if (n === 2) {
    let lo = start, hi = len - 1
    while (lo < hi) {
      let sum = nums[lo] + nums[hi]
      let left = nums[lo], right = nums[hi]
      if (sum === target) {
        res.push([left, right])
        while (lo < hi && nums[lo] === left) lo++
        while (lo < hi && nums[hi] === right) hi--
      } else if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--
      }
    }
  } else {
    for (let i = start; i < len; i++) {
      let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const arr of sub) {
        arr.push(nums[i])
        res.push(arr)
      }
      while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
  }
  console.log(res);
  return res
}



var fourSum = function (nums, target) {
  return nSumTarget(nums, 4, 0, target)
};
// @lc code=end

