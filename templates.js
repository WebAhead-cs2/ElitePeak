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
    return layout(`
    <div class="col-md-7 col-sm-12 p-0 box">
      <div class="card rounded-0 border-0 card2" id="paypage">
        <div class="form-card" >
                    <h2 id="heading2" class="text-danger">Payment Method</h2>
                    <div class="radio-group">
                        <div class='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"></div>
                        <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"></div>
                        <br>
                    </div>
                    <form method='post'>
                    <label class="pay">Name on Card</label>
                    <input type="text" name="name_on_card" id="name_on_card">
                    <div class="row">
                        <div class="col-8 col-md-6">
                            <label class="pay">Card Number</label>
                            <input type="text" name="card_number" id="card_number" placeholder="0000-0000-0000-0000" >
                        </div>
                        <div class="col-4 col-md-6">
                            <label class="pay">CVV</label>
                            <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label class="pay">Expiration Date</label>
                        </div>
                        <div class="col-md-12">
                            <input type="text" name="expiration_date" id="expiration_date" placeholder="MM/YY" minlength="5" maxlength="5">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" class="btn btn-info placeicon">
                        </div>
                    </div>
                </div>
                </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>`)
}
  module.exports = {home,SignUp,logIn,payment};