// 3 * (4 + 5)

function calc(s, l, r) {
  let op = -1; // 最低优先级运算符的位置
  let pri = 10000 - 1; // 中间运算符的优先级
  let cur_pri = 0; // 当前运算符的优先级
  let temp = 0; // 额外由括号增加的优先级

  for (let i = l; i <= r; i++) {
    cur_pri = 10000;
    switch (s[i]) {
      case "+":
      case "-":
        cur_pri = 1 + temp;
        break;
      case "*":
      case "/":
        cur_pri = 2 + temp;
        break;
      case "(":
        temp += 100;
        break;
      case ")":
        temp -= 100;
        break;
    }

    if (cur_pri <= pri) {
      pri = cur_pri;
      op = i;
    }
  }
  if (op === -1) {
    return s;
  }
  let a = calc(s, l, op - 1);
  let b = calc(s, op + 1, r);
  switch (s[op]) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

let expression = 3;
console.log(calc(expression, 0, expression.length - 1));
