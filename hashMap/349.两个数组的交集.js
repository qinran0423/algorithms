/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let retset = new Set()
  let retset1 = new Set(nums1)
  for (const num of nums2) {
    if (retset1.has(num)) {
      retset.add(num)
    }
  }

  return [...retset]
};
// @lc code=end

