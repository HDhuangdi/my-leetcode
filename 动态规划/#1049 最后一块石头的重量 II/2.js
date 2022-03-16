// 一维dp

var lastStoneWeightII = function(stones) {
  const total = stones.reduce((acc, cur) => acc + cur, 0)
  let value = Math.floor(total / 2)
  const dp = new Array(value + 1).fill(0)

  for (let i = 0; i < stones.length; i++) {
    for (let j = value; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return total - dp[value] * 2 
};