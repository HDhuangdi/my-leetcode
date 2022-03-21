const nums = [1,2,3]
const value = 3

for (let i = value; i > 0; i--) {
  
  for (let j = 0; j < nums.length; j++) {
    // value = 3
    // dp[3] = max(dp[3], dp[2] + 1)
    // dp[3] = max(dp[3], dp[1] + 2)
    // dp[3] = max(dp[3], dp[0] + 3)
    // value = 2
    // dp[2] = max(dp[2], dp[1] + 1)
    // dp[2] = max(dp[2], dp[0] + 2)
    // value = 1
    // dp[1] = max(dp[1], dp[0] + 1)
    
    dp[i] = Math.max(dp[i], dp[i - nums[j]] + nums[j]);
  }
}
