const express = require("express");
const templates = require("./templates");
const server = express();
const db = require("./database/connection");
const bcrypt = require("bcrypt");

server.use(express.static("assest"));
server.use(express.urlencoded());

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

server.post("/SignUp", (req, res) => {
  const {email, password, birthdate, first_name, last_name, country, phone, gender} = req.body;
  const saltRounds=10;
  bcrypt
  .hash(password, saltRounds)
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    db.query(`INSERT INTO users (email, password, birthdate, first_name, last_name, country, phone, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [email, hash, birthdate, first_name, last_name, country, phone, gender])
      .then(() => {
        res.redirect('/');
      })
      .catch(error => {
        res.status(500).send(`<h1>Something went wrong saving your data</h1>`);
      });
});
server.post("/LogIn",(req,res)=>{
  const email =  db.query("SELECT email FROM users");
  const user=req.body.email;
   console.log(user);
  console.log(email);
  const saltRounds=10;
  bcrypt.hash(password, saltRounds)
  
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
 
});

  

server.get("/payment",(req,res)=>{
 const html=templates.payment();
  res.send(html);
});

