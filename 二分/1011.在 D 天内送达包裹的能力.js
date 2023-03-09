/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((pre, cur) => {
    return pre + cur;
  });
  console.log(left, right);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (canFinish(weights, days, mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// 如果载重为cap,是否能在days天内完成运输？

function canFinish(weights, days, cap) {
  let i = 0;
  for (let d = 0; d < days; d++) {
    let maxCap = cap;
    // 确保船的载重要大于等于当天的货物重量
    while ((maxCap -= weights[i]) >= 0) {
      i++;
      if (i === weights.length) {
        return true;
      }
    }
  }

  return false;
}

// @lc code=end
