let first = process.argv[2].toUpperCase();
let second = process.argv[3].toUpperCase();

if (first < second) {
  console.log(-1);
} else if (first > second) {
  console.log(1);
} else {
  console.log(0);
}
