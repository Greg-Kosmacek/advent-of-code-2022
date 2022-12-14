const fs = require("fs");
/**
 * @type string
 */
const input = fs.readFileSync("day-6/input.txt");

let start = 0;
for (let i = 4; i <= input.length; i++) {
  const unique = new Set(input.slice(i - 4, i));
  if (unique.size === 4) {
    start = i;
    break;
  }
}

console.log(start);
