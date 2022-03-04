var uniquePathsWithObstacles = function (obstacleGrid) {
  const r = obstacleGrid.length;
  const c = obstacleGrid[0].length;
  const dp = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let i = 0; i < c; i++) {
    if (obstacleGrid[0][i]) {
      dp[0][i] = 0;
      break;
    } else {
      dp[0][i] = 1;
    }
  }
  for (let i = 1; i < r; i++) {
    if (!dp[i - 1][0] || obstacleGrid[i][0]) {
      dp[i][0] = 0;
    } else {
      dp[i][0] = 1;
    }
    for (let j = 1; j < c; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[r - 1][c - 1];
};
