var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  const leftMinDepth = minDepth(root.left);
  const rightMinDepth = minDepth(root.right);
  if (!leftMinDepth) return rightMinDepth + 1;
  if (!rightMinDepth) return leftMinDepth + 1;
  return Math.min(leftMinDepth, rightMinDepth) + 1;
};
