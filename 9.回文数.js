/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 当x < 0时 为负数， 则不为回文数
  // 最后一个数字为0 则第一个数字也得为0 所以只有0满足
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }


  let revertedNumber = 0
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10)
  }

  // 当数字长度为奇数时， 可以通过revertedNumber / 10 去除处于中位的数字
  // ej: 12321
  // while 循环 => x = 12   revertedNumber = 123
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};