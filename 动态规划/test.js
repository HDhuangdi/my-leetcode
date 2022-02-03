var climbStairs = function (n) {
  let memo = [];
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(45));
