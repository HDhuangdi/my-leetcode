// 中序遍历 深度优先 迭代法

var rangeSumBST = function (root, low, high) {
  const stack = [root];
  let sum = 0;
  let cur = root;
  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    const node = stack.pop();
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }
  return sum;
};
