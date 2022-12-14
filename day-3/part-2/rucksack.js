const fs = require("fs");
const input = fs.readFileSync("day-3/input.txt", "utf-8");
const groups = input.split("\n").reduce((aggregate, current, index, array) => {
  if ((index + 1) % 3 === 0) {
    aggregate.push(array.slice(index - 2, index + 1));
  }
  return aggregate;
}, []);

function getAllMatchingLetters(string1, string2) {
  const expression = new RegExp(`[${string1}]+`, "g");
  let allMatches = "";

  let match = expression.exec(string2);
  while (match && match[0]) {
    allMatches += match[0];
    match = expression.exec(string2);
  }
  return allMatches;
}

let badgeNumberSum = 0;
for (const group of groups) {
  const sameGroup1 = getAllMatchingLetters(group[0], group[1]);
  const sameGroup2 = getAllMatchingLetters(group[0], group[2]);
  const sameLetter = new RegExp(`[${sameGroup1}]`).exec(sameGroup2)[0];

  const uppercase = sameLetter.toUpperCase();
  let value = uppercase.charCodeAt(0);

  if (uppercase === sameLetter) {
    value -= 38;
  } else {
    value -= 64;
  }

  badgeNumberSum += value;
}

console.log(badgeNumberSum);
