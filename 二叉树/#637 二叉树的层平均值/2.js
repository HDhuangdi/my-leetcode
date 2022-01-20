// 深度优先遍历

var averageOfLevels = function (root) {
  let result = [];

  const traverse = (root, depth) => {
    if (!root) return;
    if (!result[depth]) {
      result[depth] = { sum: root.val, count: 1 };
    } else {
      result[depth].sum += root.val;
      result[depth].count++;
    }
    depth++;
    root.left && traverse(root.left, depth);
    root.right && traverse(root.right, depth);
  };
  traverse(root, 0);
  return result.map((item) => item.sum / item.count);
};
