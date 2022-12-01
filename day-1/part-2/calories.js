const fs = require("fs");
const input = fs.readFileSync("day-1/input.txt", "utf-8");
//                                                  😟
const items = input.split("\n\n").map((elf) => elf.split("\n"));

const elfCalories = items
  .map((elf) =>
    //    😭
    elf.reduce(
      (aggregate, calorieAmount) => aggregate + parseInt(calorieAmount),
      0
    )
  )
  .sort((a, b) => b - a);

const totalOfTop3 = elfCalories
  .slice(0, 3)
  .reduce((aggregate, calorieAmount) => aggregate + calorieAmount, 0);

console.log(totalOfTop3);
