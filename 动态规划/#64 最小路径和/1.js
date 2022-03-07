var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = (dp[0][i - 1] || 0) + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const leftNum =
        dp[i][j - 1] !== undefined
          ? dp[i][j - 1] + grid[i][j]
          : Number.MAX_VALUE;
      const topNum = dp[i - 1][j] + grid[i][j];
      dp[i][j] = Math.min(topNum, leftNum);
    }
  }
  return dp[m - 1][n - 1];
};
