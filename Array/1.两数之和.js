


let nums = [1, 3, 1, 2, 2, 3]
// Vue中diff算法
// 1.使用哈希表降低时间复杂度
// function twoSum(nums, target) {
//   let n = nums.length
//   let map = new Map()
//   for (let i = 0; i < n; i++) {
//     map.set(nums[i], i)
//   }

//   for (let i = 0; i < n; i++) {
//     let other = target - nums[i]
//     let index = map.get(other)
//     if (index && index !== i) {
//       return [i, index]
//     }
//   }
//   return [-1, -1]
// }


// 2. 返回nums中能够凑出target的两个元素的值
function twoSum(nums, target) {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let res = []
  while (left < right) {
    const leftnum = nums[left]
    const rigthnum = nums[right]
    const sum = leftnum + rigthnum
    if (sum === target) {
      res.push([leftnum, rigthnum])
      while (left < right && leftnum === nums[left]) left++;
      while (left < right && rigthnum === nums[right]) right--;
    } else if (sum > target) {
      while (left < right && rigthnum === nums[right]) right--;
    } else if (sum < target) {
      while (left < right && leftnum === nums[left]) left++;
    }
  }
  return res
}


console.log(twoSum(nums, 4));

/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   const map = {}
//   const n = nums.length
//   for (let i = 0; i < n; i++) {
//     const num = nums[i]
//     const res = target - num
//     if (res in map) {
//       return [i, map[res]]
//     } else {
//       map[num] = i
//     }
//   }
// };
// @lc code=end



