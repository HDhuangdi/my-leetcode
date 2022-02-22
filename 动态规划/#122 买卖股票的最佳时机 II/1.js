var maxProfit = function (prices) {
  let dp = [0];
  for (let i = 1; i < prices.length; i++) {
    let cur = prices[i];
    let prev = prices[i - 1];

    if (cur > prev) {
      dp[i] = dp[i - 1] + cur - prev;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[dp.length - 1];
};
