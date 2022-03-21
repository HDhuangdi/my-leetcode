// 一维dp

var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1;

  for (let i = 1; i <= coins.length; i++) {
      for (let j = 0; j <= amount; j++) {
          const coin = coins[i - 1];
          if (j < coin) continue;
          dp[j] += dp[j - coin];
      }
  }
  return dp[amount];
};