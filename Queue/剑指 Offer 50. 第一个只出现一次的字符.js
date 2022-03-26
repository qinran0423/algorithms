/**
 * @param {string} s
 * @return {character}
 */
// !使用哈希表存储索引
// var firstUniqChar = function (s) {
//   let n = s.length
//   // 判断字符串为空
//   if (n === 0) return ' '
//   // 构建一个hash表
//   const hashmap = new Map()

//   // 将字符串中每一个值映射到hash表中
//   // 如果多次出现 则赋值为-1
//   // 如果只有一次 则赋值索引
//   for (let [i, ch] of Array.from(s).entries()) {
//     if (hashmap.has(ch)) {
//       hashmap.set(ch, -1)
//     } else {
//       hashmap.set(ch, i)
//     }
//   }

//   // first 记录当前查找到的值
//   let first = n
//   for (let val of hashmap.values()) {
//     // 如果不是-1 则将first赋值为当前的查找到的索引
//     // val < first 因为first代表第一次查找到的值  否则找到的就是最后一个
//     if (val !== -1 && val < first) {
//       first = val
//     }
//   }
//   return first === n ? ' ' : s[first]
// };

//  队列
var firstUniqChar = function (s) {
  let n = s.length
  // 判断字符串为空
  if (n === 0) return ' '
  // 构建一个hash表
  const hashmap = new Map()
  let q = []
  // 将字符串中每一个值映射到hash表中
  // 如果多次出现 则赋值为-1
  // 如果只有一次 则赋值索引
  for (let [i, ch] of Array.from(s).entries()) {
    if (hashmap.has(ch)) {
      hashmap.set(ch, -1)
      //  即使队列中有一些字符出现了超过一次，但它只要不位于队首，那么就不会对答案造成影响，我们也就可以不用去删除它。只有当它前面的所有字符被移出队列，它成为队首时，我们才需要将它移除。
      while (q.length && hashmap.get(q[0][0]) === -1) {
        q.shift()
      }
    } else {
      hashmap.set(ch, i)
      // 向q队列的末尾添加当前的值和索引  
      q.push([ch, i])
    }
  }

  return q.length ? q[0][0] : ' '

};