const fs = require("fs");
const input = fs.readFileSync("day-2/input.txt", "utf-8");
const rounds = input.split("\n").map((round) => round.split(" "));

/**
 * r + x = W  x = p
 * 1 + x = 6  x = 5
 *
 * r + x = L  x = s
 * 1 + x = 0  x = -1
 *
 * r + x = D  x = r
 * 1 + x = 3  x = 2
 *
 * p + x = W  x = s
 * 2 + x = 6  x = 4
 *
 * p + x = L  x = r
 * 2 + x = 0  x = -2
 *
 * p + x = D  x = p
 * 2 + x = 3  x = 1
 *
 * s + x = W  x = r
 * 3 + x = 6  x = 3
 *
 * s + x = L  x = p
 * 3 + x = 0  x = -3
 *
 * s + x = D  x = s
 * 3 + x = 3  x = 0
 *
 * 5, 1, -3 = p
 * -1, 4, 0 = s
 * 2, -2, 3 = r
 *
 * p r s s p r r s p
 *
 * 2 1 3 3 2 1 1 3 2
 *
 * result point - opponent move point + 3 = my move point
 */

const cypherPoints = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
};
const movePoints = [2, 1, 3, 3, 2, 1, 1, 3, 2];

let points = 0;
for (const round of rounds) {
  const [opp, result] = round;
  const resultPoints = cypherPoints[result];
  points += resultPoints + movePoints[resultPoints - cypherPoints[opp] + 3];
}

console.log(points);
