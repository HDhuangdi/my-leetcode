// 迭代法

var sumRootToLeaf = function (root) {
  let answer = 0;
  const stack = [root];
  const binaryStack = [""];
  while (stack.length) {
    const node = stack.pop();
    const prevBinary = binaryStack.pop();
    const binary = prevBinary + node.val;
    if (!node.left && !node.right) {
      const num = parseInt(binary, 2);
      answer += num;
      continue;
    }
    if (node.left) {
      stack.push(node.left);
      binaryStack.push(binary);
    }
    if (node.right) {
      stack.push(node.right);
      binaryStack.push(binary);
    }
  }
  return answer;
};
