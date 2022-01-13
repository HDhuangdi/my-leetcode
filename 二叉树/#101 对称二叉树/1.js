var isSymmetric = function (root) {
  let result = true;
  const tranverse = (p, q) => {
    if (!p && !q) return (result = true);
    if (!p || !q) return (result = false);
    if (p.val !== q.val) return (result = false);

    return tranverse(p.left, q.right) && tranverse(q.left, p.right);
  };

  tranverse(root, root);
  return result;
};
