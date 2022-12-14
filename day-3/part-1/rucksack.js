const fs = require("fs");
const input = fs.readFileSync("day-3/input.txt", "utf-8");
const rucksacks = input
  .split("\n")
  .map((rucksack) => [
    rucksack.substring(0, rucksack.length / 2),
    rucksack.substring(rucksack.length / 2, rucksack.length),
  ]);

let incorrectItemSum = 0;
for (const rucksack of rucksacks) {
  const sameLetter = new RegExp(`[${rucksack[0]}]`).exec(rucksack[1])[0];
  const uppercase = sameLetter.toUpperCase();
  let value = uppercase.charCodeAt(0);

  if (uppercase === sameLetter) {
    value -= 38;
  } else {
    value -= 64;
  }

  incorrectItemSum += value;
}

console.log(incorrectItemSum);
