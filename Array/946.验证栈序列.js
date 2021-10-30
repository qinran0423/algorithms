/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  let j = 0;
  for (const cur of pushed) {
    stack.push(cur)
    while (stack[stack.length - 1] === popped[j] && stack.length) {
      stack.pop()
      j++
    }
  }

  return !stack.length
};
// @lc code=end

