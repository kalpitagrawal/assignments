const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf-8", (err, content) => {
  if (err) {
    console.error(`Error`, err);
    return;
  }
  fs.writeFile("write.txt", content, (err) => {
    if (err) {
      console.error(`Error writing file`, err);
      return;
    }
    console.log(`File written successfully`);
  });
});
