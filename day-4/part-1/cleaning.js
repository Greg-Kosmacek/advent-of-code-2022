const fs = require("fs");
const input = fs.readFileSync("day-4/input.txt", "utf-8");

const cleaningTasks = input.split("\n").map((task) =>
  task.split(",").map((range) => {
    const nums = range.split("-");
    return {
      start: parseInt(nums[0]),
      end: parseInt(nums[1]),
    };
  })
);

let containsCount = 0;
for (const task of cleaningTasks) {
  const range1 = task[0];
  const range2 = task[1];
  const [lowerRange, higherRange] =
    range1.start < range2.start ||
    (range1.start === range2.start && range1.end > range2.end)
      ? [range1, range2]
      : [range2, range1];

  if (higherRange.end <= lowerRange.end) {
    containsCount++;
  }
}

console.log(containsCount);
