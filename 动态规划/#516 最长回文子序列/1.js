var longestPalindromeSubseq = function (s) {
  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      const j = i + L - 1;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        let left = dp[i + 1] ? dp[i + 1][j] : 0;
        dp[i][j] = Math.max(left, dp[i][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
};
