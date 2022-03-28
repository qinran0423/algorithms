/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0 // 代表可以跳跃的步数

  for (let i = 0; i <= cover; i++) {
    // i + nums[i] i代表前面已经跳过的步数 nums[i]代表当前值
    cover = Math.max(cover, i + nums[i])
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};