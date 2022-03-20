/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 路径：记录在track中
// 选择列表： nums中不存在与track的那些元素
// 结束条件： nums中的元素全都都在track中出现
function backtrack(nums, track, res) {
  // 终止条件
  if (nums.length === track.length) {
    return res.push([...track])
  }

  for (let i = 0; i < nums.length; i++) {
    // 排除不合法的可能
    if (track.includes(nums[i])) {
      continue
    }

    track.push(nums[i])
    backtrack(nums, track, res)
    track.pop()
  }

}

var permute = function (nums) {
  // 定义路径列表
  let track = []
  let res = []
  backtrack(nums, track, res)
  return res;
};
// @lc code=end

