// 二维dp

var change = function (amount, coins) {
  const dp = new Array(coins.length + 1)
    .fill(0)
    .map(() => new Array(amount + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      const coin = coins[i - 1];
      dp[i][j] = dp[i - 1][j];
      if (j < coin) continue;
      dp[i][j] += dp[i][j - coin];
    }
  }
  return dp[coins.length][amount];
};
