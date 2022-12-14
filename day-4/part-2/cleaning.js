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

/**
 * 4-6, 8-12  6-8, 4-12  -2, -8
 * 4-6, 6-6   6-6, 4-6    0, -2
 * 4-6, 6-10  6-6, 4-10   0, -6
 * 4-6, 5-8   6-5, 4-8    1, -4
 * 4-6, 4-6   6-4, 4-6    2, -2
 * 4-6, 2-5   6-2, 4-5    4, -1
 * 4-6, 1-4   6-1, 4-4    5, 0
 * 4-6, 4-4   6-4, 4-4    2, 0
 * 4-6, 0-3   6-0, 4-3    6, 1
 */
let containsCount = 0;
for (const task of cleaningTasks) {
  const range1 = task[0];
  const range2 = task[1];
  const diff1 = range1.end - range2.start;
  const diff2 = range1.start - range2.end;

  if (diff1 > 0 !== diff2 > 0 || diff1 < 0 !== diff2 < 0) {
    containsCount++;
  }
}

console.log(containsCount);
