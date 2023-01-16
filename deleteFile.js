const fs = require("fs");

fs.rm("HelloWorld.txt", { recursive: true }, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully deleted");
  }
});
