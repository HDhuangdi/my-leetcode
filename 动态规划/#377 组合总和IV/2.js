var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for(let j = 1; j <= target; j++) {
      for(let i = 1; i <= nums.length; i++) {
          if(j >= nums[i - 1]) dp[j] += dp[j - nums[i - 1]]
      }
  }
  return dp[dp.length - 1]
};