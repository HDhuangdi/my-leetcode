// 利用二叉搜索树的特性

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
  let found = false;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let result = arr[l] + arr[r];
    if (result < k) {
      l++;
    } else if (result > k) {
      r--;
    } else {
      found = true;
      break;
    }
  }
  return found;
};
