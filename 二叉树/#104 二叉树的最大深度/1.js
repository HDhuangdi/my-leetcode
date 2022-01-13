var maxDepth = function (root, depth) {
  if (depth === undefined) {
    depth = 0;
  } else {
    depth++;
  }

  if (!root) return depth;

  const leftDepth = maxDepth(root.left, depth);
  const rightDepth = maxDepth(root.right, depth);
  if (leftDepth > rightDepth) return leftDepth;
  return rightDepth;
};
