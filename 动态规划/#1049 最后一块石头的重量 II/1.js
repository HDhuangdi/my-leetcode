// 二维dp
var lastStoneWeightII = function(stones) {
  const total = stones.reduce((acc, cur) => acc + cur, 0)
  let value = Math.floor(total / 2)
  const dp = new Array(stones.length).fill(0).map(() => new Array(value + 1).fill(0))
  for (let i = 0; i <= value; i++) {
      if (stones[0] <= i) dp[0][i] = stones[0]
  }
  for (let i = 1; i < stones.length; i++) {
      for (let j = 1; j <= value; j++) {
          const no = dp[i - 1][j]
          if (stones[i] > j) {
              dp[i][j] = no
              continue
          }
          const yes = dp[i - 1][j - stones[i]] + stones[i]
          dp[i][j] = Math.max(yes, no)
      }
  }
  return total - dp[stones.length - 1][value] * 2 
};