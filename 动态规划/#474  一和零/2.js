// 一维dp

var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
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
    const zero = arr[i - 1][0];
    const one = arr[i - 1][1];
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j - zero][k - one] + 1, dp[j][k]);
      }
    }
  }
  return dp[m][n];
};
