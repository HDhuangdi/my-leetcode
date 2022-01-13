var isBalanced = function (root) {
  if (!root) return true;
  const maxHeight = (root) => {
    if (!root) return 0;
    return Math.max(maxHeight(root.left), maxHeight(root.right)) + 1;
  };
  const leftMaxHeight = maxHeight(root.left);
  const rightMaxHeight = maxHeight(root.right);
  console.log(leftMaxHeight, rightMaxHeight);
  return (
    Math.abs(leftMaxHeight - rightMaxHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
