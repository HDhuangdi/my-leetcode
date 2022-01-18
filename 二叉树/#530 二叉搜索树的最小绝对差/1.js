var getMinimumDifference = function (root) {
  let minDiff = Number.MAX_VALUE;
  let prevValue;
  let stack = [root];
  let cur = root;

  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    let node = stack.pop();
    if (prevValue !== undefined) {
      const diff = Math.abs(node.val) - Math.abs(prevValue);
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
    prevValue = node.val;

    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }
  return minDiff;
};
