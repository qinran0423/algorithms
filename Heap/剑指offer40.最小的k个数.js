/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let len = arr.length;
  let res = [];
  if (k === 0) return [];
  if (k === len) return arr;
  buildHeap(arr);
  for (let i = 1; i <= k; i++) {
    res.push(arr[0]);
    swap(arr, 0, len - i);
    heapAdjust(arr, 0, len - i);
  }
  return res;
};

var buildHeap = function (arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapAdjust(arr, i, len);
  }
}

function swap(arr, i, child) {
  if (i === child) return;
  arr[i] = arr[child] + arr[i];
  arr[child] = arr[i] - arr[child];
  arr[i] = arr[i] - arr[child];
}
function heapAdjust(arr, i, len) {
  let child = i * 2 + 1;
  while (child < len) {
    if (child + 1 < len && arr[child] > arr[child + 1]) {
      child = child + 1;
    }
    if (arr[child] < arr[i]) {
      swap(arr, i, child);
      i = child;
      child = i * 2 + 1;
    } else {
      break;
    }
  }
}