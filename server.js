const express = require("express");
const templates = require("./templates");
const server = express();
const db = require("./database/connection");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
server.use(cookieParser());
server.use(express.static("assest"));
server.use(express.urlencoded());
const saltRounds=10;

server.listen(3000, () =>
  console.log("Server listening on http://localhost:3000")
);
server.get("/", (req, res) => {
 
const email= req.cookies.email;
      const html = templates.home(email);
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

server.post("/LogIn",async(req,res)=>{
  try{

    let email = req.body.email;
    let password = req.body.password;
    res.cookie("email", email, { maxAge: 600000 });

    let haspass=await db.query(`SELECT  password FROM users WHERE email = $1 `,[email]);///
    let pass=haspass.rows.map(e=>e.password);
   
   let users=await db.query(`SELECT  email FROM users WHERE email = $1 `,[email]);
 
   let newusers=users.rows.map(e=>e.email);
   //console.log(await bcrypt.compare(password,pass[0]));
   let comparepass = await bcrypt.compare(password,pass[0]);
  
   if(newusers.length===0)
   {  
      res.send("the use not found");
   }

   else if(newusers[0]===users.rows[0].email&& comparepass===true)
   {
      res.redirect('/');
   }

   else if(newusers[0]===users.rows[0].email&& comparepass===false)  
   {
     res.send("Wrong Password");
   }
 
  }
  catch(err){
    console.log(err);
    res.send(`not found1`)
  }

});
    
server.get("/payment",(req,res)=>{
  const email=req.cookies.email;
  if(!email){
    const html = templates.error("You must be logged in ");
    res.status(401).send(html);
  }
 else{const html=templates.payment();
  res.send(html);}
});
server.post("/payment", (req,res)=>{
  const {name_on_card, card_number, cvv, expiration_date} = req.body;
  bcrypt
  .hash(card_number, saltRounds)
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashcardnum = bcrypt.hashSync(card_number, salt);
  bcrypt
  .hash(cvv, saltRounds)
     const hashcvv= bcrypt.hashSync(cvv, salt);
   bcrypt
     .hash(expiration_date, saltRounds)
      const hashdate= bcrypt.hashSync(expiration_date, salt);
  db.query(`INSERT INTO paycard (name_on_card, card_number, cvv, expiration_date) VALUES ($1, $2, $3, $4) RETURNING *`, [name_on_card, hashcardnum, hashcvv, hashdate])
  .then(() => {
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
    res.status(500).send(`<p>Something went wrong saving your data</p>`);
  });
});
server.get("/rooms",async(req,res)=>{
  let r = await db.query(`SELECT * FROM rooms`);
  const room=templates.getrooms(r.rows[0].hotel_id,r.rows[0].departure_date,r.rows[0].arrival_date,r.rows[0].rec_guest_qty);

 res.send(room);
});
server.get("/log-out", (req, res) => {
  res.clearCookie("email");
  res.redirect("/");
});
