const fs = require("fs");
const input = fs.readFileSync("day-2/input.txt", "utf-8");
const a = input.split("\n").map((round) => round.split(" "));
const b = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
  0: 2,
  1: 1,
  2: 3,
  3: 3,
  4: 2,
  5: 1,
  6: 1,
  7: 3,
  8: 2,
};
// Security by obfuscation
console.log(a.reduce((c, d) => (c += b[d[1]] + b[b[d[1]] - b[d[0]] + 3]), 0));
