// 递归法 深度优先

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  const node = new TreeNode(root1.val + root2.val);
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);
  return node;
};
