var isCousins = function (root, x, y) {
  let xNodeInfo = { parent: null, depth: NaN, found: false };
  let yNodeInfo = { parent: null, depth: NaN, found: false };
  const update = (node, parent, depth) => {
    if (node.val === x) {
      xNodeInfo = { parent, depth, found: true };
    } else if (node.val === y) {
      yNodeInfo = { parent, depth, found: true };
    }
  };
  const queue = [{ node: root, depth: 0 }];
  let prevDepth = 0;

  while (queue.length) {
    const { node, depth } = queue.shift();
    if (prevDepth !== depth) {
      xNodeInfo.found = false;
      yNodeInfo.found = false;
    }
    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
      update(node.left, node, depth + 1);
    }
    if (xNodeInfo.found && yNodeInfo.found)
      return xNodeInfo.parent !== yNodeInfo.parent;
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
      update(node.right, node, depth + 1);
    }
    if (xNodeInfo.found && yNodeInfo.found)
      return xNodeInfo.parent !== yNodeInfo.parent;
    prevDepth = depth;
  }
  return false;
};
