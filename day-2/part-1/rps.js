const fs = require("fs");
const input = fs.readFileSync("day-2/input.txt", "utf-8");
const a = input.split("\n").map((round) => round.split(" "));
const b = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  0: 6,
  1: 0,
  2: 3,
  3: 6,
  4: 0,
};
// Security by obfuscation
console.log(a.reduce((c, d) => c + b[d[1]] + b[b[d[1]] - b[d[0]] + 2], 0));
