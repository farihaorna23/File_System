const fs = require("fs");

let content = {
  Name: "Fariha",
  City: "New York"
};

fs.appendFile("HelloWorld.txt", JSON.stringify(content), err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Succesfully updated file");
  }
});
