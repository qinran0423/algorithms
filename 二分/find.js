// 假设 nums 为 [1,3,4,6,7,8,10,13,14]， target 为 4,寻找target在nums中对应的索引，没有找到返回-1。

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }

    return -2;
  }
}

// 寻找最左边的满足条件的值

function binarySearch2(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] > target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      right = mid - 1;
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1;
  return left;
}

// 寻找最右边的满足条件的值
function binarySearch3(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      right = mid - 1;
    }
  }

  if (right < 0 || nums[right] !== target) return -1;
  return right;
}

// 寻找最左插入位置
// 比如一个数组 nums: [1,3,4]，target 是 2。我们应该将其插入（注意不是真的插入）的 位置是索引 1 的位置，即 [1,2,3,4]。因此寻找最左插入位置应该返回 1， 而寻找最左满足条件 应该返回-1。
// 另外如果有多个满足条件的值，我们返回最左侧的。 比如一个数组 nums: [1,2,2,2,3,4]，target 是 2，我们应该插入的位置是 1。
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// 寻找最右边插入位置
function binarySearch4(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const nums = [1, 3, 5];

console.log(binarySearch4(nums, 4));
