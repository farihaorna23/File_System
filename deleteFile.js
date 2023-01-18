const fs = require("fs");

fs.rm("./BonusP1.js", { recursive: true }, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully deleted");
  }
});
