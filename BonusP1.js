const fs = require("fs");
const http = require("http");
//created two files
const files = ["./text.html", "./secondFile.html"];
let content = "New Pages Created";
for (let file of files) {
  fs.writeFile(file, content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Files added");
    }
  });
}

function getContent(file) {
  let content = "";
  fs.readFile(file, (err, content) => {});
}

//creating a server
http
  .createServer((req, res) => {
    const { url, method } = req;
    if (url === "./text.html" && method === "GET") {
      //read the file and get the content and send it back
    }
  })
  .listen(3000, () => {
    console.log("Server is running");
  });
