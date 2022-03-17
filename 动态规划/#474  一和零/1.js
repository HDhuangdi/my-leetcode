// 二维dp

var findMaxForm = function (strs, m, n) {
  const dp = new Array(strs.length + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
  const arr = strs.map((item) => {
    let zero = 0;
    let one = 0;
    for (let char of item) {
      if (char == 0) zero++;
      if (char == 1) one++;
    }
    return [zero, one];
  });
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        const no = dp[i - 1][j][k];
        const weight0 = arr[i - 1][0];
        const weight1 = arr[i - 1][1];
        if (j < weight0 || k < weight1) {
          dp[i][j][k] = no;
          continue;
        }
        const yes = dp[i - 1][j - weight0][k - weight1] + 1;
        dp[i][j][k] = Math.max(no, yes);
      }
    }
  }
  return dp[arr.length][m][n];
};
