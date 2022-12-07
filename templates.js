const { application } = require("express");

function layout(content) {
    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Elite Peak</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/Reservation">Reservation</a>
              <a href="/payment">Payment</a>
            </nav>
          </header>
          ${content}
        </body>
      </html>
    `;
  }

  function  home() {
      return layout(/*html*/ `
         <h1>Elite Peak</h1>
        <a href="/SignUp">Sign Up</a>
        <a href="/LogIn">Log In</a>
     `)
  }
  function logIn() {
    return layout( `
      <h1>Log in to your account</h1>
      <form  method='post'>
        <label> Email:</label>
        <input id="mail" type="email" name="email" required></br></br>
        <label>Password:<label>
        <input id="password" type="password" name="password" required></br></br>
        <button type="submit">Log in</button>
      </form>
    `);
  }
  function SignUp(){
        
    return layout(`
       <form  method='post'>
          <label>First_Name:<label>
          <input type='text' id='fname' name='first_name' required/><br><br>
          <label>Last_Name:<label>
          <input type='text' id='lname' name='last_name' required/><br><br>
          <label>Phone Number:<label>
          <input type='tel' id='phone' name='phone'/><br><br>
          <label>Email:</label>
          <input id="umail" type="email" name="email" required></br></br>
          <label>Password:</label>
          <input type='password' id='pass' name='password' required/><br><br>
          <label>Gender:</label>
          <label>Male</label>
          <input type='radio' id='male' value='Male' name='gender'/>
          <label>Female</label>
          <input type='radio' id='female' value='Female' name='gender'/></br></br>
          <label>Country:<label>
          <input type='text' id='country' name='country'/><br><br>
          <label>Birthdate:</label>
          <input type='date' id='date' name='birthdate' /></br></br>
          <input type='submit' id='submit' value='submit' />
       </form>
  `);
  }
  function payment(){
    return layout(`<section class="p-4 p-md-5" 
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-5">
      <div class="card rounded-3">
        <div class="card-body p-4">
          <div class="text-center mb-4">
            <h3>Settings</h3>
            <h6>Payment</h6>
          </div>
          <form id='form'action="">
            <p class="fw-bold mb-4 pb-2">Saved cards:</p>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXc" class="form-control form-control-lg"
                    value="**** **** **** 3193" />
                  <label class="form-label" for="formControlLgXc">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXs" class="form-control form-control-lg"
                    value="**** **** **** 4296" />
                  <label class="form-label" for="formControlLgXs">Card Number</label>
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>

            <p class="fw-bold mb-4">Add new card:</p>

            <div class="form-outline mb-4">
              <input type="text" id="formControlLgXsd" class="form-control form-control-lg"
                value="Anna Doe" />
              <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
            </div>

            <div class="row mb-4">
              <div class="col-7">
                <div class="form-outline">
                  <input type="text" id="formControlLgXM" class="form-control form-control-lg"
                    value="1234 5678 1234 5678" />
                  <label class="form-label" for="formControlLgXM">Card Number</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-outline">
                  <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
                    placeholder="MM/YYYY" />
                  <label class="form-label" for="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div class="col-2">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-lg btn-block">Add card</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`)
  }
  module.exports = {home,SignUp,logIn,payment};