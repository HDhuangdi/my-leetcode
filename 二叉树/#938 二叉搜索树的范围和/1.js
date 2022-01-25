// 前序遍历 深度优先 迭代法

var rangeSumBST = function (root, low, high) {
  const stack = [root];
  let sum = 0;
  while (stack.length) {
    const node = stack.pop();
    if (node.val < low) {
      if (node.right) stack.push(node.right);
      continue;
    }
    if (node.val > high) {
      if (node.left) stack.push(node.left);
      continue;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
    sum += node.val;
  }
  return sum;
};
