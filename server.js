const express = require("express");
const templates = require("./templates");
const server = express();
server.use(express.static("assest"));
server.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
server.get("/", (req, res) => {
    const html = templates.home();
    res.send(html);
  });
server.get("/LogIn", (req, res) => {
    const html = templates.logIn();
    res.send(html);
});
server.get("/SignUp", (req, res) => {
  const html = templates.SignUp();
  res.send(html);
});

