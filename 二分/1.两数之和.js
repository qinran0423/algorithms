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
var twoSum = function (nums, target) {
  let n = nums.length;
  let idxarr = new Array(n);
  let ret = new Array(2);
  for (let i = 0; i < n; i++) {
    idxarr[i] = i;
  }
  idxarr.sort((i, j) => nums[i] - nums[j]);
  for (let i = 0; i < n; i++) {
    const val = nums[idxarr[i]];
    const j = binary_search(nums, idxarr, i + 1, target - val);
    if (j === -1) continue;
    let a = idxarr[i];
    let b = idxarr[j];

    if (a > b) {
      ret = [b, a];
    }
    ret = [a, b];
  }

  return ret;
};

function binary_search(nums, idxarr, left, x) {
  let right = idxarr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[idxarr[mid]] === x) {
      return mid;
    } else if (nums[idxarr[mid]] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
// @lc code=end
