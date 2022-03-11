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

// console.log(bubbleSort(array));


// 快速排序
// 给数组找一个标志位，所有元素和标志位的元素比大小， 大的在右边， 小的在左边

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  // 设置一个标志位
  let flag = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), flag, ...quickSort(right)]
}

// console.log('快速排序', quickSort(array));

// 原地快排
// i ->                 < -j
// [e, a, b, c, d, e, f, g, h]
// i 找到一个比e大的
// j 找到一个比e小的
// i和j的值交换下位置
// 最后i和j遇见

function quick1(arr, start, end) {
  // 双指针
  let init = start
  let flag = arr[init]
  start++
  while (start <= end) {
    while (arr[end] > flag) {
      end--
    }
    while (arr[start] < flag) {
      start++
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]

  return start
}

function quickSort1(arr, start, end) {
  if (start < end) {
    let index = quick1(arr, start, end) //标志位的值
    quickSort1(arr, start, index - 1)
    quickSort1(arr, index, end)
  }

  return arr
}

console.log('原地快排', quickSort1(array, 0, array.length));



