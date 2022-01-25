var leafSimilar = function (root1, root2) {
  const arr1 = [];
  const arr2 = [];
  const stack1 = [root1];
  const stack2 = [root2];
  while (stack1.length) {
    const node = stack1.pop();
    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
    if (!node.left && !node.right) {
      arr1.push(node.val);
    }
  }
  while (stack2.length) {
    const node = stack2.pop();
    if (node.left) {
      stack2.push(node.left);
    }
    if (node.right) {
      stack2.push(node.right);
    }
    if (!node.left && !node.right) {
      arr2.push(node.val);
    }
  }
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, index) => arr2[index] === item);
};
