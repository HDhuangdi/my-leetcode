var findSecondMinimumValue = function (root, rootVal) {
  if (rootVal === undefined) rootVal = root.val;
  if (root.val !== rootVal) {
    return root.val;
  }
  if (root.left) {
    let leftTreeMinVal = findSecondMinimumValue(root.left, rootVal);
    let rightTreeMinVal = findSecondMinimumValue(root.right, rootVal);
    if (leftTreeMinVal === -1 && rightTreeMinVal !== -1) return rightTreeMinVal;
    if (rightTreeMinVal === -1 && leftTreeMinVal !== -1) return leftTreeMinVal;
    if (leftTreeMinVal === -1 && rightTreeMinVal === -1) return -1;
    return Math.min(leftTreeMinVal, rightTreeMinVal);
  }
  return -1;
};
