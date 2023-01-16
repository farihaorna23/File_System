const fs = require("fs");
let content = "This is a new file.";
fs.writeFile("./HelloWorld.txt", content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Sucessfully created a file with content");
  }
});
