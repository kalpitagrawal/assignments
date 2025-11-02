const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf-8", function (err, contents) {
  console.log(contents);
});

// const fs = require("fs");

// fs.readFile("3-read-from-file.md", "utf-8", (err, contents) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("Contents:", contents);
//   }
// });
let sum = 0;
for (let i = 1; i < 100000000; i++) {
  sum += i;
}
console.log(sum);
