// 递归法

var preorderTraversal = function (root, result = []) {
  if (!root) return [];
  result.push(root.val);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
};
