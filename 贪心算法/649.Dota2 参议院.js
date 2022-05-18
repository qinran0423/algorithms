/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let queue = senate.split('')
  let stack = []
  while (queue[0]) {
    let s = queue.shift()
    if (stack.length === 0 || stack[stack.length - 1] === s) {
      stack.push(s)
    } else {
      queue.push(stack.pop())
    }
  }
  console.log(stack);
  return stack.pop() === 'R' ? 'Radiant' : 'Dire'
};
// @lc code=end

