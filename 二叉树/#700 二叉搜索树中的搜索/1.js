// 递归法

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST(root.val > val ? root.left : root.right, val);
};
