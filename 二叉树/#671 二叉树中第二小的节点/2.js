var findSecondMinimumValue = function (root) {
  const rootVal = root.val;
  let ans = -1;
  const dfs = (root) => {
    if (!root) return;
    if (ans !== -1 && root.val > ans) return;
    if (root.val !== rootVal) {
      ans = root.val;
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
