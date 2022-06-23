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
// 回溯
var fourSum1 = function (nums, target) {
  let res = []
  let len = nums.length
  let tmp = []
  nums.sort((a, b) => a - b)
  dfs(0, 4, target)
  function dfs(index, count, target) {
    if (count === 0 && target === 0) {
      res.push([...tmp])
    }

    if (len - index < count) {
      return
    }

    if (target < count * nums[index]) {
      return
    }

    if (target > count * nums[len - 1]) {
      return
    }

    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }

      tmp.push(nums[i])
      dfs(i + 1, count - 1, target - nums[i])
      tmp.pop()
    }
  }

  return res

};
// ++++++++++++++++++++++++++++++++++++++++++++++++++
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

