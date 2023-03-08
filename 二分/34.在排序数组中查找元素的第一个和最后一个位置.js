/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [5,7,7,8,8,10], target = 8
// 输出：[3,4]
var searchRange = function (nums, target) {
  const leftIndex = binarySearchLeft(nums, target);
  const rightIndex = binarySearchRight(nums, target);

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex];
  }

  return [-1, -1];
};

function binarySearchLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }

  return left;
}

function binarySearchRight(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  if (right < 0 || nums[right] !== target) {
    return -1;
  }

  return right;
}

// @lc code=end
