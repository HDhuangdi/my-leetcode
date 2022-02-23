// dp table动态规划法

var maxProfit = function (prices) {
  let len = prices.length;
  // 1是持有现金  0是持有股票
  let dp = new Array(len).fill(0).map(() => new Array(2));
  dp[0][0] = -prices[0]; // 第一天如果手上持有股票时，现金为-prices[0]
  dp[0][1] = 0; // 第一天如果手上持有现金时，现金为0

  for (let i = 1; i < prices.length; i++) {
    /**
          如果今天要持有股票
          假设昨天持有股票，继续持有
          假设昨天持有现金，昨天的现金 - 今天的股票钱
       */
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    /**
          如果今天要持有现金
          假设昨天持有股票，卖掉昨天的股票
          假设昨天持有现金，继续持有
       */
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
  }
  return dp[len - 1][1];
};
