const express = require("express");
const templates = require("./templates");
const server = express();

server.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
server.get("/", (req, res) => {
    const html = templates.home();
    res.send(html);
    
  });