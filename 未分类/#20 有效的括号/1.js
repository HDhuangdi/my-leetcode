// 使用栈的思想,不是右括号就入栈,如果发现是右括号就判断栈顶是否和当前右括号相等,并出栈

var isValid = function (s) {
  let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];
  for (char of s) {
    if (map.has(char)) {
      if (stack[stack.length - 1] !== map.get(char) || stack.length === 0)
        return false;
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};
