// 前序遍历 深度优先 递归法

var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  let sum = 0;
  if (root.val >= low) {
    sum += rangeSumBST(root.left, low, high);
  }
  if (root.val <= high) {
    sum += rangeSumBST(root.right, low, high);
  }
  if (root.val >= low && root.val <= high) {
    sum += root.val;
  }

  return sum;
};
