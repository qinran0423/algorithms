/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = 0;
  function bct(cur = 0, start = 0) {
    if (start === nums.length) return;
    for (let i = start; i < nums.length; i++) {
      cur ^= nums[i];
      console.log(cur)
      res += cur;
      bct(cur, i + 1);
      cur ^= nums[i];
    }
  }
  bct();
  return res;

};