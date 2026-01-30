/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require('fs');
fs.writeFile('2-counter.js','we aare here in 4 file.js going to 2 counter.js','utf8', () => {
if(err) 
  return;
console.log("file written successfully");
})
