/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 记录每个字符是否出现过
  const dep = new Set()
  const n = s.length
  // 右指针，初始值为-1， 相当于我们在字符串的左边界的左侧， 还没有开始移动
  let pre = -1, ans = 0
  for (let i = 0; i < n; i++) {

    if (i != 0) {
      // 左指针向右移动一格， 移除一个字符
      dep.delete(s.charAt(i - 1))
    }
    while (pre + 1 < n && !dep.has(s.charAt(pre + 1))) {
      // 不断的移动右指针
      dep.add(s.charAt(pre + 1))
      pre++
    }
    // 第i 到pre个字符是一个极长的无重复字符子串
    ans = Math.max(ans, pre - i + 1)
  }

  return ans
};