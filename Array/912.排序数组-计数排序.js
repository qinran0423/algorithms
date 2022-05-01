/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let len = nums.length
  if (len < 2) {
    return nums
  }

  // [5,5,2,3,1]
  const count = []
  for (let i = 0; i < len; i++) {
    const n = nums[i]
    if (count[n]) {
      count[n]++
    } else {
      count[n] = 1
    }
  }
  console.log(count)
  // [undefined, 1,1,1,undefined, 2]
  const res = []
  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      while (count[i] > 0) {
        res.push(i)
        count[i]--
      }
    }
  }
  return res
};