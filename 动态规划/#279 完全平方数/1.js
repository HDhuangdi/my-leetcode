var numSquares = function (n) {
  // dp[i] 在和为i的情况下，最少的完全平方数
  const dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[dp.length - 1];
};
