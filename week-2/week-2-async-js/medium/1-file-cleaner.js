/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs')

fs.readFile("read.js", "utf-8", (err, data) => {
    const str = data.trim().replace(/\s+/g, " ");
    fs.writeFile('read.js', `${str}`, 'utf-8', (err) => {
        if (err) {
            console.log("err while writing to file")
            return;
        }
        console.log("file written successfully")
    })
})


