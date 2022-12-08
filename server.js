const express = require("express");
const templates = require("./templates");
const server = express();
// const db = require("./database/connection");
const db = require("./database/payconnection");
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
  
 
});

  

server.get("/payment",(req,res)=>{
 const html=templates.payment();
  res.send(html);
});

server.post("/payment", (req,res)=>{
const {name_on_card, card_number, cvv, expiration_date} = req.body;
   const saltRounds = 10;
   bcrypt
   .hash(card_number, saltRounds)
   bcrypt
   .hash(cvv, saltRounds)
   bcrypt
   .hash(expiration_date, saltRounds)
db.query(`INSERT INTO paycard (name_on_card, card_number, cvv, expiration_date) VALUES ($1, $2, $3, $4) RETURNING *`, [name_on_card, hash, cvv, expiration_date])
.then(() => {
  res.redirect('/');
})
.catch(error => {
  console.log(error);
  res.status(500).send(`<h1>Something went wrong saving your data</h1>`);
});

});
// name_on_card VARCHAR(255) NOT NULL,
// card_number INTEGER NOT NULL,
// cvv INTEGER NOT NULL,
// expiration_date VARCHAR(12) NOT NULL