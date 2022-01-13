// 迭代法

var lowestCommonAncestor = function (root, p, q) {
  let ancestor = root;

  while (true) {
    if (p.val < ancestor.val && q.val < ancestor.val) {
      ancestor = ancestor.left;
    } else if (p.val > ancestor.val && q.val > ancestor.val) {
      ancestor = ancestor.right;
    } else {
      break;
    }
  }

  return ancestor;
};
