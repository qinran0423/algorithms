/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let left = 0
  let right = s.length - 1
  let queue = []
  let word = ''
  // 过滤左边的空格
  while (s.charAt(left) === ' ') {
    left++
  }
  // 过滤右边的空格
  while (s.charAt(right) === ' ') {
    right--
  }

  while (left <= right) {
    // 从左边开始查找
    let ch = s.charAt(left)
    // 如果不是空 则word累加
    if (ch !== ' ') {
      word += ch
    } else if (ch === ' ' && word) {
      // 如果为空 说明前面的单词已经累加好了  则push栈中
      queue.unshift(word)
      word = ''
    }
    left++
  }
  // 还有最后一个单词
  queue.unshift(word)
  console.log(queue);
  return queue.join(' ')
};
// @lc code=end

