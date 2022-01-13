// 迭代法

var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  const stack = [root];
  let sum = 0;
  while (stack.length) {
    const node = stack.pop();
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  return sum;
};
