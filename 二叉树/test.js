const tree = {
  val: 10,
  left: {
    val: 5,
    left: { val: 1 },
  },
  right: { val: 15 },
};

const BFS = (root) => {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return result;
};

console.log(BFS(tree));
