// 递归法

var sumOfLeftLeaves = function (root, sum = 0) {
  if (!root) return sum;
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }
  sum = sumOfLeftLeaves(root.left, sum);
  sum = sumOfLeftLeaves(root.right, sum);
  return sum;
};
