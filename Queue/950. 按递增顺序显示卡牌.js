/*
 * @lc app=leetcode.cn id=950 lang=javascript
 *
 * [950] 按递增顺序显示卡牌
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {number[]}
 */
// [2,13,3,11,5,17,7]
// [2,3,5,7,11,13,17]
// 反推
var deckRevealedIncreasing = function (deck) {
  let res = []
  // 首先进行排序
  deck.sort((a, b) => a - b)

  while (deck.length) {
    if (res.length) {
      const data = res.pop()
      res.unshift(data)
    }

    const data1 = deck.pop()
    res.unshift(data1)
  }
  return res
};
// @lc code=end

