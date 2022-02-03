// 递归法

var climbStairs = function (n) {
  let memo = [1, 2];
  const climbStairsMemo = (n, memo) => {
    if (memo[n - 1] > 0) return memo[n - 1];
    memo[n - 1] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
    return memo[n - 1];
  };
  return climbStairsMemo(n, memo);
};
