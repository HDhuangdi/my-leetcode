// 递归法

var findMode = function (root) {
  const arr = [];
  let prev = null;
  let count = 1;
  let maxCount = 0;
  let answer = [];
  const traverse = (root) => {
    if (!root) return;
    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  };
  traverse(root);
  arr.forEach((item) => {
    if (item === prev) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [item];
    } else if (count === maxCount) {
      answer.push(item);
    }
    prev = item;
  });
  return answer;
};
