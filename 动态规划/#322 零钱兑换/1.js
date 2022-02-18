// dp table法

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i < coin) continue;
      dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
    }
  }
  return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1];
};
