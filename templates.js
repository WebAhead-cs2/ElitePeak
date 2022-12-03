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
              <a href="/new-post">Write new post</a>
              <a href="/posts">about us</a>
            </nav>
          </header>
          ${content}
        </body>
      </html>
    `;
  }
  
  function home() {
      return layout(/*html */ `
        <h1>Elite Peak</h1>
        <a href="/SignUp">Sign Up</a>
        <a href="/LogIn">Log In</a>
      `);
    
  }
  function logIn() {
    return layout( `
      <h1>Log in to your account</h1>
      <form action="/log-in">
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
       <form>
          <label>Name:<label>
          <input type='text' id='text' required/><br><br>
          <label>Phone Number:<label>
          <input type='tel' id='phone'/><br><br>
          <label>Password:</label>
          <input type='password' id='pass' required/><br><br>
          <label>Gender:  </label>
          <label>Male</label>
          <input type='radio' id='male' value='male' name='gender'/>
          <label>Female</label>
          <input type='radio' id='female' value='female' name='gender'/></br></br>
          <label>Birthdate:</label>
          <input type='date' id='date' /></br></br>
          <input type='submit' id='submit' value='submit' />
          
       </form>
  `);
  }
  module.exports = {home,SignUp,logIn};