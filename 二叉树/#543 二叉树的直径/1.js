var diameterOfBinaryTree = function (root) {
  let maxPath = 0;
  const maxNodeCount = (root) => {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    const leftNodeCount = maxNodeCount(root.left);
    const rightNodeCount = maxNodeCount(root.right);
    const path = leftNodeCount + rightNodeCount + 1;
    if (path > maxPath) maxPath = path;
    return Math.max(leftNodeCount, rightNodeCount) + 1;
  };

  maxNodeCount(root);
  return maxPath !== 0 ? maxPath - 1 : 0;
};
