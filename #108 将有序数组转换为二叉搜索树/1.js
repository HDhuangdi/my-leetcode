var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);

  const rootIndex = Math.floor(nums.length / 2);

  const rootVal = nums[rootIndex];
  const leftNums = nums.slice(0, rootIndex);
  const rightNums = nums.slice(rootIndex + 1);
  const leftTree = sortedArrayToBST(leftNums);
  let rightTree = null;
  if (rightNums.length) {
    rightTree = sortedArrayToBST(rightNums);
  }
  return new TreeNode(rootVal, leftTree, rightTree);
};
