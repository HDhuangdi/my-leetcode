// 广度优先

var rangeSumBST = function (root, low, high) {
  const queue = [root];
  let sum = 0;
  while (queue.length) {
    const node = queue.shift();
    if (node.val >= low && node.val <= high) sum += node.val;
    if (node.left && node.val >= low) {
      queue.push(node.left);
    }
    if (node.right && node.val <= high) {
      queue.push(node.right);
    }
  }
  return sum;
};
