var minDiffInBST = function (root) {
  const stack = [root];
  let minValue = Number.MAX_VALUE;
  let prevVal;
  let cur = root;
  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    const node = stack.pop();
    if (prevVal !== undefined) {
      const diff = Math.abs(prevVal - node.val);
      diff < minValue && (minValue = diff);
    }
    prevVal = node.val;
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }
  return minValue;
};
