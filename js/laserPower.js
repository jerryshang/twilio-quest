function calculatePower(arr) {
  return arr
    .map((item) => item * 2)
    .reduce((sum, current) => (sum += current), 0);
}
