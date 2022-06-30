/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let len = s.length
  let arr = new Array(len * 3)
  let size = 0
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      arr[size++] = '%'
      arr[size++] = '2'
      arr[size++] = '0'
    } else {
      arr[size++] = s[i]
    }
  }

  return arr.join('').substring(0, size)
};
