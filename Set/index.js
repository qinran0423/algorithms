

class Set {
  constructor() {
    this.items = {}
  }
  // 添加
  add(ele) {
    if (!this.has(ele)) {
      this.items[ele] = ele
      return true
    }
    return false
  }
  // 删除
  delete(ele) {
    if (this.has(ele)) {
      delete this.items[ele]
      return true
    }
    return false
  }
  // 是否包含
  has(ele) {
    return Object.prototype.hasOwnProperty.call(this.items, ele)
  }
  // 移除
  clear() {
    this.items = {}
  }
  // 数量
  size() {
    return Object.keys(this.items).length
  }
  // 所有值
  values() {
    return Object.values(this.items)
  }
  // 并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }
  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = value
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    });

    return intersectionSet
    // for (let i = 0; i < values.length; i++) {
    //   if (otherSet.has(values[i])) {
    //     intersectionSet.add(values[i])
    //   }
    // }
    // return intersectionSet
  }
  // 差集
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
  // 子集
  inSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false
    let isSubset = true
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}


// const set = new Set()

// set.add(1)
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());

// set.add(2)
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setA.add(3)
setA.add(4)
setA.add(5)
setA.add(6)

const unionAB = setA.union(setB)
console.log(unionAB.values());