/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   let haylen = haystack.length
//   let needlen = needle.length

//   if (needlen > haylen) return -1
//   if (needlen === 0) return 0

//   // haylen - needlen + 1为什么要这么干呢？
//   // 我的理解
//   // 如果 i 循环到这个（haylen - needlen + 1）位置还没有匹配的话 就不可能再匹配了
//   for (let i = 0; i < haylen - needlen + 1; i++) {
//     let j
//     for (j = 0; j < needlen; j++) {
//       if (haystack.charAt(i + j) !== needle.charAt(j)) {
//         break
//       }
//     }
//     if (j === needlen) {
//       return i
//     }

//   }

//   return -1
// };


var strStr = function (haystack, needle) {
  let halen = haystack.length
  let nelen = needle.length

  let i, j

  for (i = 0, j = 0; i < halen && j < nelen; i++) {
    if (haystack.charAt(i) === needle.charAt(j)) {
      j++
    } else {
      // "mississippi"
      // "issip"
      i -= j
      j = 0
    }
  }

  return j === nelen ? i - nelen : -1
};
// @lc code=end

