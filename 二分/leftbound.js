// 左闭右开
function leftBound(nums, target) {
  let left = 0;
  let right = nums.length;

  // 左闭右开
  // 终止条件是left === right 搜索区间为[left, left)为空
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }

  if (left === num.length) return -1;
  return nums[left] === target ? left : -1;
}

// 搜索区间: 左闭右闭
function leftBound1(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      right = mid - 1;
    }
  }

  if (left >= nums.length || nums[left] != target) {
    return -1;
  }

  return left;
}

const nums = [1, 2, 2, 4];
console.log(closeBound(nums, 2));
