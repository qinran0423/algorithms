let array = require('./arr')

// arr.sort((a, b) => a - b)
// console.log(arr);

// 冒泡排序
function bubbleSort(arr) {
  //每个元素和右边的元素进行比较， 如果比他大， 则交换位置， 否则什么都不干
  let len = arr.length - 1
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(array));