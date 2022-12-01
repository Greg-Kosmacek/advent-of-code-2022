const fs = require("fs");
const input = fs.readFileSync("day-1/input.txt", "utf-8");
const items = input.split("\n");

let mostCalories = 0;
let calorieCounter = 0;
for (const calorieAmount of items) {
  if (calorieAmount === "") {
    if (calorieCounter > mostCalories) {
      mostCalories = calorieCounter;
    }
    calorieCounter = 0;
    continue;
  }
  calorieCounter += parseInt(calorieAmount);
}

console.log(mostCalories);
