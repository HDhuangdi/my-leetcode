var isSubtree = function (root, subRoot) {
  let isContain = false;

  const traverse = (root, subRoot) => {
    if (!root && !subRoot) {
      isContain = true;
      return;
    }
    if (!root) {
      isContain = false;
      return;
    }
    isContain = isSameTree(root, subRoot);
    if (isContain) return;
    traverse(root.left, subRoot);
    if (isContain) return;
    traverse(root.right, subRoot);
  };
  const isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  traverse(root, subRoot);
  return isContain;
};
