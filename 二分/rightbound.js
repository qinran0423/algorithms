// 搜索区间：左开右闭
function rightBound(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  if (left === 0) return -1;
  return nums[left + 1] === target ? left - 1 : -1;
}

function rightBound1(nums, target) {
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

const nums = [1, 2, 2, 2, 4];
console.log(rightBound1(nums, 2));
