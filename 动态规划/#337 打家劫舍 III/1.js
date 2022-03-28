let map = new Map();
var rob = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  if (map.has(root)) return map.get(root);
  let val = root.val;
  //选择抢父节点
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right);
  }
  // 选择不抢父节点
  let val2 = rob(root.left) + rob(root.right);
  let res = Math.max(val, val2);
  map.set(root, res);
  return res;
};
