var minimumTotal = function (triangle) {
  const r = triangle.length
  const dp = new Array(triangle.length).fill(0).map(() => [])
  dp[r - 1] = triangle[r - 1]
  for (let i = r - 2; i >= 0; i--) {
      const c = triangle[i].length
      for (let j = 0; j < c; j++) {
          let cur = triangle[i][j]
          dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + cur
      }
  }
  return dp[0][0]
};