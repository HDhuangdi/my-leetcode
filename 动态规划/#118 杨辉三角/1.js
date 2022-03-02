var generate = function (numRows) {
  const dp = [[1], [1, 1]];
  if (numRows === 1) return [[1]];
  for (let i = 2; i < numRows; i++) {
    dp[i] = new Array(i + 1);
    dp[i][0] = 1;
    dp[i][i] = 1;
    for (let j = 1; j < dp[i - 1].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }
  return dp;
};
