/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return processed(s) === processed(t);
};

const processed = (str) => {
  const stackstr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      stackstr.pop();
    } else {
      stackstr.push(str[i]);
    }
  }

  console.log(stackstr);

  return stackstr.join("");
};

// @lc code=end
