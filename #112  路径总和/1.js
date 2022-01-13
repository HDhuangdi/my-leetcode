var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const curSum = targetSum - root.val;
  if (curSum === 0 && !root.left && !root.right) return true;
  return hasPathSum(root.left, curSum) || hasPathSum(root.right, curSum);
};
