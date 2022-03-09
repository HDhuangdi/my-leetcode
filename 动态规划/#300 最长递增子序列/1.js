var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);

  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
