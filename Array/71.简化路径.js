/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  let paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (path === '..') {
      stack.pop()
    } else if (path && path !== '.') {
      stack.push(path)
    }
  }

  return '/' + stack.join('/')
};
// @lc code=end

