// 动态规划法

var climbStairs = function (n) {
  if (n <= 2) return n;
  let l = 1;
  let r = 2;
  let a = 3;
  for (let i = 3; i < n; i++) {
    l = r;
    r = a;
    a = l + r;
  }
  return a;
};
