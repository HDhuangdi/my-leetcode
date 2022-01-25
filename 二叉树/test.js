const tree = {
  val: 2,
  left: {
    val: 1,
  },
  right: { val: 4, left: { val: 3 } },
};

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
  console.log(firstNode);
};

increasingBST(tree);
