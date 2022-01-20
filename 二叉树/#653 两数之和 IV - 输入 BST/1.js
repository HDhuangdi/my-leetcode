// 最简单暴力的方法

var findTarget = function (root, k) {
  const arr = [];
  const stack = [root];
  let cur = root;
  while (stack.length) {
    while (cur.left) {
      cur = cur.left;
      stack.push(cur);
    }
    let node = stack.pop();
    arr.push(node.val);
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }
  const found = arr.find((item, index) => {
    const anotherItem = k - item;
    return arr.slice(index + 1).indexOf(anotherItem) !== -1;
  });
  return found !== undefined;
};
