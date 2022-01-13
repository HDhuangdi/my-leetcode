// 迭代法

var binaryTreePaths = function (root) {
  const nodeStack = [root];
  const pathStack = [];
  const result = [];

  while (nodeStack.length) {
    const node = nodeStack.pop();
    const path = pathStack.pop();
    if (!node.left && !node.right) {
      result.push(path ? path + node.val : node.val.toString());
      continue;
    }
    if (node.left) {
      nodeStack.push(node.left);
      pathStack.push((path ? path + node.val : node.val.toString()) + "->");
    }
    if (node.right) {
      nodeStack.push(node.right);
      pathStack.push((path ? path + node.val : node.val.toString()) + "->");
    }
  }

  return result;
};
