var isUnivalTree = function (root) {
  const rootVal = root.val;
  let isSame = true;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val !== rootVal) {
      isSame = false;
      return isSame;
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return isSame;
};
