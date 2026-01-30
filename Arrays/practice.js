// Question-1. For a given array with marks of students ->[80,97,42,53]
// Find the average marks of the entries class.

let marks = [80, 97, 42, 53, 86, 68];
let sum = 0;
for (let val of marks) {
  sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);
