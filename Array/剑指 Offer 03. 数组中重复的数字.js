/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = new Map()
  for (const num of nums) {
    if (map.has(num)) return num;
    map.set(num, 1)
  }
  return -1
};
