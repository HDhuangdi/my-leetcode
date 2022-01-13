// 递归法

var inorderTraversal = function (root) {
  const res = [];

  const tranvers = (root) => {
    if (!root) return res;
    tranvers(root.left);
    res.push(root.val);
    tranvers(root.right);
  };
  tranvers(root);

  return res;
};
