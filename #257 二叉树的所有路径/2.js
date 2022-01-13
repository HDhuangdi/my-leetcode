// 递归法

var binaryTreePaths = function (root, path, result = []) {
  if (!root) return [];
  if (!path) {
    path = root.val + "->";
  } else {
    path += root.val + "->";
  }
  if (!root.left && !root.right) {
    result.push(path.slice(0, -2));
    return result;
  }
  binaryTreePaths(root.left, path, result);
  binaryTreePaths(root.right, path, result);
  return result;
};
