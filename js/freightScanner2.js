function scan(arr) {
  let indexes = [];
  arr.forEach((item, idx) => {
    if (item === "contraband") {
      indexes.push(idx);
    }
  });
  return indexes;
}
