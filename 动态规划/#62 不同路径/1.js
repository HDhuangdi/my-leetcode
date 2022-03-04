var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0].fill(1);
  for (let i = 1; i < m; i++) {
    dp[i][0] = 1;
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
