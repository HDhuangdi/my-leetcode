var findTilt = function (root) {
  let tilt = 0;
  const traverse = (root) => {
    if (!root) return 0;
    if (!root.left && !root.right) return root.val;
    let leftSum = traverse(root.left);
    let rightSum = traverse(root.right);
    tilt += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + root.val;
  };
  traverse(root);
  return tilt;
};
