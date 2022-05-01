/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) {
    return nums
  }

  quickSort(nums, 0, nums.length - 1)

  return nums
};


function quickSort(nums, start, end) {
  if (start >= end) {
    return
  }
  // 获取基准位置
  let pivotIndex = partition(nums, start, end)
  // 根据基准位置，分成两部分进行递归排序
  quickSort(nums, start, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, end)
}

function partition(nums, start, end) {
  // 获取第一个位置的元素作为基准元素
  let pivot = nums[start]
  let init = start
  start++
  // 左右两边分别开始查找比基准元素大/小的位置
  while (start <= end) {
    // 右边开始找到了比基准元素小的元素
    while (nums[end] > pivot) {
      end--
    }
    // 左边开始找到了比基准元素大的元素
    while (nums[start] < pivot) {
      start++
    }
    if (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
    console.log(nums)
  }
  // 上面的操作吧比基准元素大的和小的元素分开
  [nums[init], nums[start - 1]] = [nums[start - 1], nums[init]]
  return start
}