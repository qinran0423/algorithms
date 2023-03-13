// 输⼊⼀个数组 nums = [2,1,2,4,3]，你返回数组 [4,2,4,-1,-1]。

function nextGreaterElement(nums) {
  let n = nums.length;
  let res = new Array(n);
  let s = [];

  for (let i = n - 1; i >= 0; i--) {
    while (s.length && s[s.length - 1] <= nums[i]) {
      s.pop();
    }
    res[i] = s.length === 0 ? -1 : s[s.length - 1];
    s.push(nums[i]);
  }

  return res;
}

let nums = [2, 1, 2, 4, 3];
console.log(nextGreaterElement(nums));
