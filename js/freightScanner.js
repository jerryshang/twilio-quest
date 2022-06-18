function scan(arr) {
  let total = 0;
  arr.forEach((item) => {
    if (item === "contraband") total++;
  });
  return total;
}
