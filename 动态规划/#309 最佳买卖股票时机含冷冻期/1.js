var maxProfit = function (prices) {
  const len = prices.length;
  let dp = new Array(len).fill(0).map(() => new Array(3));
  // 0是当天持有股票 1是不做任何操作（观望、冷冻期） 2是当天卖出
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = -Infinity;

  for (let i = 1; i < len; i++) {
    // 当天持有股票需要考虑昨天是不做任何操作和昨天是持有股票的情况
    dp[i][0] = Math.max(dp[i - 1][1] - prices[i], dp[i - 1][0]);
    // 当天不做任何操作需要考虑昨天是不做任何操作或者昨天是卖出的情况
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    // 当天卖出需要考虑昨天是持有股票的情况
    dp[i][2] = dp[i - 1][0] + prices[i];
  }
  return Math.max(dp[len - 1][1], dp[len - 1][2]);
};
