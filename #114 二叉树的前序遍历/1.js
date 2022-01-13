// 迭代法

var preorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};
