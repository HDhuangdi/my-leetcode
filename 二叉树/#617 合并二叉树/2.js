// 迭代法 广度优先

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  const merged = new TreeNode(root1.val + root2.val);
  const queue1 = [merged];
  const queue2 = [root1];
  const queue3 = [root2];
  while (queue2.length && queue3.length) {
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    const node3 = queue3.shift();
    const left2 = node2.left;
    const left3 = node3.left;
    const right2 = node2.right;
    const right3 = node3.right;
    if (left2 || left3) {
      if (left2 && left3) {
        const left = new TreeNode(left2.val + left3.val);
        node1.left = left;
        queue1.push(left);
        queue2.push(left2);
        queue3.push(left3);
      }
      if (!left2) {
        node1.left = left3;
      }
      if (!left3) {
        node1.left = left2;
      }
    }
    if (right2 || right3) {
      if (right2 && right3) {
        const right = new TreeNode(right2.val + right3.val);
        node1.right = right;
        queue1.push(right);
        queue2.push(right2);
        queue3.push(right3);
      }
      if (!right2) {
        node1.right = right3;
      }
      if (!right3) {
        node1.right = right2;
      }
    }
  }
  return merged;
};
