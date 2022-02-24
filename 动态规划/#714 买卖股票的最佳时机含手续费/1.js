var maxProfit = function (prices, fee) {
  const len = prices.length;
  let dp = new Array(len).fill(0).map(() => new Array(2));
  dp[0][0] = -prices[0]; // 持有股票
  dp[0][1] = 0; // 持有现金
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i] - fee, dp[i - 1][1]);
  }
  return dp[len - 1][1];
};
