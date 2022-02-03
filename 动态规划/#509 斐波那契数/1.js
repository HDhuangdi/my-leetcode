var fib = function (n) {
  if (n < 2) return n;
  let l = 0;
  let r = 1;
  let a = 1;
  for (let i = 2; i < n; i++) {
    l = r;
    r = a;
    a = l + r;
  }
  return a;
};
