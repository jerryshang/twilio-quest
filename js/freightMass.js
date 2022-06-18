function calculateMass(arr) {
  return arr.reduce((sum, current) => sum + current.length, 0);
}
