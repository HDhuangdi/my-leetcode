var fib = function (n) {
  let l = 0;
  let r = 1;
  let a = 1;
  if (n === 0) return l;
  if (n === 1) return r;
  if (n === 2) return a;
  for (let i = 2; i < n; i++) {
    l = r;
    r = a;
    a = l + r;
  }
  return a;
};
