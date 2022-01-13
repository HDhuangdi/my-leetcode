// 迭代法
var inorderTraversal = function (root) {
  if (!root) return [];

  const stack = [];
  let cur = root;
  const result = [];
  stack.push(root);
  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      cur = node.right;
      stack.push(cur);
    }
  }
  return result;
};
