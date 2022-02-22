var maxScoreSightseeingPair = function (values) {
  let dp = [0];
  /**
      对应笔记中的第2点: values[i] + values[j] + i - j = values[i] + i + values[j] - j
   */
  let iDp = [values[0]];
  for (let i = 1; i < values.length; i++) {
    dp[i] = Math.max(dp[i - 1], iDp[i - 1] + values[i] - i);
    iDp[i] = Math.max(iDp[i - 1], values[i] + i);
  }

  return dp[dp.length - 1];
};
