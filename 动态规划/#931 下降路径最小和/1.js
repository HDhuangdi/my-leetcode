var minFallingPathSum = function (matrix) {
  let n = matrix.length
  let dp = new Array(n).fill(0).map(() => new Array(n))
  dp[n - 1] = matrix[n - 1]
  for(let i = n - 2; i >= 0; i--) {
      for(let j = 0; j < n; j++) {
          let cur = matrix[i][j]
          if(j === 0) {
              dp[i][j] = Math.min(cur + dp[i + 1][j], cur + dp[i + 1][j + 1])
          }else if(j === n - 1) {
              dp[i][j] = Math.min(cur + dp[i + 1][j], cur + dp[i + 1][j - 1])
          }else {
              dp[i][j] = Math.min(cur + dp[i + 1][j - 1], cur + dp[i + 1][j], cur + dp[i + 1][j + 1])
          }
      }
  }
  return Math.min(...dp[0])
};