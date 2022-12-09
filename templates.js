
function layout(content) {
    return (`
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
              <a href="/SignUp">Sign Up</a>
              <a href="/LogIn">Log In</a>
            </nav>
          </header>
          ${content}
          <script src = "homeJS.js"></script>
        </body>
      </html>
    `);
  }

  function  home(email) {
    if (email) {
      return layout(/*html */ `
        <h1>Welcome back ${email}</h1>
        <div class = "container">
    <h1 class = "title" id="ElitePeak">ElitePeak</h2>
    <div class = "hotel-wrapper">
      <div class = "hotel-search">
        <h2 class = "title">Find your next stay</h2>
        <blockquote>Search deals on hotels, homes, and much more...<br>
          
        </blockquote>

        <div class = "hotel-search-box">
          <input type = "text" class = "search-control" placeholder="Where are you going?" id = "search-location">
          <input type = "text" class = "search-control" placeholder="Check in" id = "search-checkIn" required pattern="\d{4}-d{2}-d{2}" onfocus="this.type='date'">
          <input type = "text" class = "search-control" placeholder="Check out" id = "search-checkOut"onfocus="this.type='date'" >
          <input type = "text" class = "search-control" a placeholder="Number of guests" id = "search-numOfpeople">
          <button type = "submit" class = "search-btn btn" id = "search-btn">
            <i class = "fas fa-search"></i>
          </button>
        </div>
      </div>

      <div class = "hotel-result">
        <h2 class = "title">Your Search Results:</h2>
        <div id= "hotel">
          <!-- hotel item -->
           <!--<div class = "hotel-item">
            <div class = "hotel-img">
              <img src = "https://cf.bstatic.com/xdata/images/hotel/square1000/400959311.jpg?k=86212bb3279269c91bb9f66d209cd1c7e3c9ab9d53a396b626fd5c5ae756052a&o=" alt = "hotel">
            </div>
            <div class = "hotel-name">
              <h3>Potato Chips</h3>
              <a href = "#" class = "rooms-btn">Get rooms</a>
            </div>
          </div> -->
          <!-- end of hotel item -->
        </div>
      </div>


      <div class = "hotel-details">
        <!-- rooms close btn -->
        <button type = "button" class = "btn rooms-close-btn" id = "rooms-close-btn">
          <i class = "fas fa-times"></i>
        </button>

        <!-- hotel content -->
        <div class = "hotel-details-content">
          <!-- <h2 class = "rooms-title">hotels Name Here</h2>
          <p class = "rooms-category">Category Name</p>
          <div class = "rooms-instruct">
            <h3>Instructions:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo blanditiis quis accusantium natus! Porro, reiciendis maiores molestiae distinctio veniam ratione ex provident ipsa, soluta suscipit quam eos velit autem iste!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam voluptatibus ad obcaecati magnam, esse numquam nisi ut adipisci in?</p>
          </div>
          <div class = "rooms-hotel-img">
            <img src = "food.jpg" alt = "">
          </div>
          <div class = "rooms-link">
            <a href = "#" target = "_blank">Watch Video</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>

        <a href="/log-out">Log out</a>
      `);
    }
     else{
      return layout(`
         <h1>Elite Peak</h1>
       
     `)
     } 
  }
  function logIn() {
    return layout( `
      <h1>Log in to your account</h1>
      <form   method='post'>
        <label> Email:</label>
        <input id="mail" type="email" name="email" required></br></br>
        <label>Password:<label>
        <input id="password" type="password" name="password" required></br></br>
        <button type="submit">Log in</button>
        <p>didn't have an account? <a href='SignUp'>signup</a></p>
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
                            <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" class="placeicon" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label class="pay">Expiration Date</label>
                        </div>
                        <div class="col-md-12">
                            <input type="text" name="expiration_date" id="expiration_date" placeholder="MM/YY" >
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
  function error(message) {
    return layout(/*html*/ `
      <h1>${message}</h1>
    `);
  }
  module.exports = {home,SignUp,logIn,payment,error};