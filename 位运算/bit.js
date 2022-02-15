


let STYLE = 1
let CLASS = 1 << 1
let CHILDREN = 1 << 2



// 授权 | 
let vnodeType = STYLE | CLASS

// 判断 &
console.log('vnodeType的类型 STYLE', !!(vnodeType & STYLE));
console.log('vnodeType的类型 CLASS', !!(vnodeType & CLASS));
console.log('vnodeType的类型 CHILDREN', !!(vnodeType & CHILDREN));

// 删除授权
vnodeType = vnodeType ^ CLASS
console.log('vnodeType的类型 STYLE', !!(vnodeType & STYLE));
console.log('vnodeType的类型 CLASS', !!(vnodeType & CLASS));
console.log('vnodeType的类型 CHILDREN', !!(vnodeType & CHILDREN));