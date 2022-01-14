// 迭代法

var findMode = function (root) {
  if (!root) return [];
  let prev = null;
  let count = 1;
  let maxCount = 0;
  let answer = [];
  const arr = [];
  const stack = [root];
  let cur = root;

  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    let node = stack.pop();
    arr.push(node.val);
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }

  arr.forEach((item) => {
    if (item === prev) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > maxCount) {
      answer = [item];
      maxCount = count;
    } else if (count === maxCount) {
      answer.push(item);
    }
    prev = item;
  });
  return answer;
};
