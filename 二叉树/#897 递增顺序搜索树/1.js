var increasingBST = function (root) {
  let firstNode;
  let prevNode;
  const stack = [root];
  let cur = root;
  while (stack.length) {
    while (cur.left) {
      cur = cur.left;
      stack.push(cur);
    }
    const node = stack.pop();
    if (!firstNode) firstNode = node;
    if (prevNode) {
      prevNode.right = node;
    }
    prevNode = node;
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
    node.right = null;
    node.left = null;
  }
  return firstNode;
};
