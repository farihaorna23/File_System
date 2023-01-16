const fs = require("fs");

fs.readFile("HelloWorld.txt", (err, contents) => {
  if (err) {
    console.error(err);
  } else {
    let content = contents.toString();
    console.log(content);
  }
});
