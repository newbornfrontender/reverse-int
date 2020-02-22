module.exports = function reverse (n) {
  const getEither = (n) => Math.sign(n);
  const toPositive = (n) => n * -1;
  const isPositive = getEither(n) === -1;

  n = isPositive ? toPositive(n) : n;

  return n.toString().split('').reverse().join('');
}
