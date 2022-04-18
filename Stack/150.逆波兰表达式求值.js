/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

  let calc = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => getNumber(b / a),
  }

  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]

    if (t in calc) {
      const num1 = stack.pop()
      const num2 = stack.pop()
      stack.push(calc[t](num1, num2))
    } else {
      stack.push(Number(t))
    }
  }
  return stack.pop()
};


function getNumber(n) {
  return Number(n.toString().split('.')[0])
}
// @lc code=end

