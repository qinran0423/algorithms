/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = []
  let path = []
  backTrack(0)
  return ret
  function backTrack(index) {
    ret.push([...path])
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i])
      backTrack(i + 1)
      path.pop()
    }
  }
};
// @lc code=end

