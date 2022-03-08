var longestPalindrome = function (s) {
  let maxLength = 1;
  let begin = 0;
  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      // j - i + 1 = L
      const j = L + i - 1;
      if (j > len) break;
      if (s[i] === s[j]) {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && maxLength < L) {
        maxLength = L;
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + maxLength);
};
