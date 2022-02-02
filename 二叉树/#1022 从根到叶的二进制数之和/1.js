// 递归法

var sumRootToLeaf = function (root) {
  let answer = 0;
  const traverse = (root, binary) => {
    if (!root) return;
    binary += root.val;
    if (!root.left && !root.right) {
      const num = parseInt(binary, 2);
      answer += num;
      return;
    }
    if (root.left) {
      traverse(root.left, binary);
    }
    if (root.right) {
      traverse(root.right, binary);
    }
  };
  traverse(root, "");
  return answer;
};
