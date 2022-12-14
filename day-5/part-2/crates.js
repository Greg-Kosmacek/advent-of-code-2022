const fs = require("fs");
const input = fs.readFileSync("day-5/input.txt", "utf-8");

let [crates, moves] = input.split("\n\n");
crates = crates
  .split("\n")
  .slice(0, -1)
  .map((crateString) => {
    const rowArray = [];
    for (let i = 1; i < crateString.length; i += 4) {
      rowArray.push(crateString.charAt(i));
    }
    return rowArray;
  })
  .reduce((columnArray, rowArray, index, fullArray) => {
    for (let i = 0; i < rowArray.length; i++) {
      if (!columnArray[i]) {
        columnArray[i] = [];
      }
      const value = fullArray[index][i];
      if (value.trim()) {
        columnArray[i][index] = value;
      }
    }
    return columnArray;
  }, [])
  .map((column) => column.reverse().filter((letter) => letter));

moves = moves.split("\n").map((move) =>
  move
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "")
    .split(" ")
    .map((num) => parseInt(num))
);

for (const move of moves) {
  const [amount, from, to] = move;
  const fromColumn = crates[from - 1];
  const toColumn = crates[to - 1];

  const slice = fromColumn.slice(-amount, fromColumn.length);
  crates[from - 1] = fromColumn.slice(0, -amount);
  toColumn.push(...slice);
}

console.log(crates.map((crate) => crate[crate.length - 1]).join(""));
