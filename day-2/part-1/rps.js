const fs = require("fs");
const input = fs.readFileSync("day-2/input.txt", "utf-8");
const rounds = input.split("\n").map((round) => round.split(" "));

/**
 * r - r = 1 - 1 = 0  = D
 * r - p = 1 - 2 = -1 = L
 * r - s = 1 - 3 = -2 = W
 * p - r = 2 - 1 = 1  = W
 * p - p = 2 - 2 = 0  = D
 * p - s = 2 - 3 = -1 = L
 * s - r = 3 - 1 = 2  = L
 * s - p = 3 - 2 = 1  = W
 * s - s = 3 - 3 = 0  = D
 *
 * 0 = D
 * -1, 2 = L
 * -2, 1 = W
 *
 * W L D W L
 *
 * 6 0 3 6 0
 *
 * +2 to result of my play - opponent
 */

const movePoints = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};
const resultPoints = [6, 0, 3, 6, 0];

let points = 0;
for (const round of rounds) {
  const [opp, me] = round;
  const myPoints = movePoints[me];
  points += myPoints + resultPoints[myPoints - movePoints[opp] + 2];
}

console.log(points);
